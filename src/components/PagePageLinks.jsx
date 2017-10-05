import React from 'react';
import request from 'request'
import cheerio from 'cheerio'

class PagePageLinks extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selector: '',
            // selector: '.post__title_link',
            res: []
        }
    }

    render() {
        return (
            <div id={'page-page-links'}>
                <div className="info-block">
                    You this section you can get the data selector from all to catalogs. Just specify the selector and the program will collect links to pages. For example, a.link.
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        if(this.state.selector == ''){
                            alert("Enter selector!")
                        } else {
                            this.props.preloaderMetod(true, 'Get links!')
                            this.getPageLink(this.props.catalogLinks.length)
                        }
                    }}
                >
                    <div className="line">
                        <input
                            type="text"
                            placeholder={'a.linkToPage'}
                            className={'big-input'}
                            value={this.state.selector}
                            onChange={(e) => {
                                this.setState({
                                    selector: e.target.value
                                })
                                this.props.pageLinksSend(1)
                            }}
                        />
                        <input type="submit" value={'Get'}/>
                    </div>
                </form>
                <textarea
                    placeholder={'The results will be here...'}
                    value={this.state.res}
                    onChange={(e) => {
                        this.setState({
                            res: e.target.value
                        })
                    }}
                />
            </div>
        );
    }

    getPageLink(i) {
        if (i > 0) {
            new Promise((resolve, reject) => {
                request({
                    url: this.props.catalogLinks[i],
                    method: "GET",
                    timeout: 1000,
                    followRedirect: true,
                    maxRedirects: 10
                }, (error, response, html) => {
                    if (!error && response.statusCode == 200) {
                        let $ = cheerio.load(html)
                        $(this.state.selector).each((i, element) => {
                            setTimeout(() => {
                                this.props.preloaderMetod(true, 'Get links: ' + element.attribs.href)
                            }, 0)
                            let temp = this.state.res
                            if (typeof temp == 'string') {
                                temp = temp.split(",")
                            }
                            if (temp.length > 0)
                                temp.push('\n' + element.attribs.href)
                            else
                                temp.push(element.attribs.href)

                            this.props.pageLinksSend(temp)
                            this.setState({
                                res: temp
                            })
                        });
                        resolve("result");
                    } else {
                        setTimeout(() => {
                            this.props.preloaderMetod(true, `Get ${this.props.catalogLinks[i]} err: ${error}`)
                        }, 0)
                        resolve("result");
                    }
                });
            }).then(
                result => {
                    setTimeout(() => {
                        this.getPageLink(--i)
                    }, 500)
                },
                error => {
                    setTimeout(() => {
                        this.getPageLink(--i)
                    }, 500)
                }
            )
        } else {
            setTimeout(() => {
                this.props.preloaderMetod(false, '')
            }, 0)
        }
    }

}

export default PagePageLinks;