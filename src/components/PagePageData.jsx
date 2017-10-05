import React from 'react';
import request from 'request'
import cheerio from 'cheerio'

class PagePageData extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tamplate: '{ name: {A}, time: {B}, category: {C}, tags: {D}, like: {E}, wive{F} }',
            selectorA: '.user-info__nickname_small',
            selectorB: '.post__time',
            selectorC: '.post__flow',
            selectorD: '.stacked-counter__value',
            selectorE: '.voting-wjt__counter',
            selectorF: '.post-stats__views-count',
            res: []
        }
    }

    render() {
        return (
            <div id={'page-page-data'}>
                <div className="info-block">
                    In this section, you can take the data with each page selected
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.preloaderMetod(true, 'Get date from pages!')
                    this.getData(this.props.pageLinks.length)
                }}>
                    <div className="line">
                        <input
                            type="text"
                            placeholder={'Selector A'}
                            value={this.state.selectorA}
                            onChange={(e) => {
                                this.setState({
                                    selectorA: e.target.value
                                })
                            }}
                        />
                        <input
                            type="text"
                            placeholder={'Selector B'}
                            value={this.state.selectorB}
                            onChange={(e) => {
                                this.setState({
                                    selectorB: e.target.value
                                })
                            }}
                        />
                        <input
                            type="text"
                            placeholder={'Selector C'}
                            value={this.state.selectorC}
                            onChange={(e) => {
                                this.setState({
                                    selectorC: e.target.value
                                })
                            }}
                        />
                    </div>
                    <div className="line">
                        <input
                            type="text"
                            placeholder={'Selector D'}
                            value={this.state.selectorD}
                            onChange={(e) => {
                                this.setState({
                                    selectorD: e.target.value
                                })
                            }}
                        />
                        <input
                            type="text"
                            placeholder={'Selector E'}
                            value={this.state.selectorE}
                            onChange={(e) => {
                                this.setState({
                                    selectorE: e.target.value
                                })
                            }}
                        />
                        <input
                            type="text"
                            placeholder={'Selector F'}
                            value={this.state.selectorF}
                            onChange={(e) => {
                                this.setState({
                                    selectorF: e.target.value
                                })
                            }}
                        />
                    </div>
                    <div className="line">
                        <input
                            type="text"
                            placeholder={'Template to save the data'}
                            className={'big-input'}
                            value={this.state.tamplate}
                            onChange={(e) => {
                                this.setState({
                                    tamplate: e.target.value
                                })
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

    getData(i) {
        if (i > 0) {
            let temp = this.state.tamplate
            request({
                url: this.props.pageLinks[i],
                method: "GET",
                timeout: 1000,
                followRedirect: true,
                maxRedirects: 10
            }, (error, response, html) => {
                if (!error && response.statusCode == 200) {
                    let $ = cheerio.load(html)
                    $(this.state.selectorA).each((i, element) => {
                        let res = element.children[0].data
                        temp = temp.replace(/{A}/, '\"' + res + '\"')
                    });
                    $(this.state.selectorB).each((i, element) => {
                        let res = element.children[0].data
                        temp = temp.replace(/{B}/, '\"' + res + '\"')
                    });
                    $(this.state.selectorC).each((i, element) => {
                        let res = element.children[0].data
                        temp = temp.replace(/{C}/, '\"' + res + '\"')
                    });
                    $(this.state.selectorD).each((i, element) => {
                        let res = element.children[0].data
                        temp = temp.replace(/{D}/, '\"' + res + '\"')
                    });
                    $(this.state.selectorE).each((i, element) => {
                        let res = element.children[0].data
                        temp = temp.replace(/{E}/, '\"' + res + '\"')
                    });
                    $(this.state.selectorF).each((i, element) => {
                        let res = element.children[0].data
                        temp = temp.replace(/{F}/, '\"' + res + '\"')
                    });


                    let tempRes = this.state.res
                    if (tempRes.length > 0)
                        tempRes.push('\n' + temp)
                    else
                        tempRes.push(temp)
                    this.setState({
                        res: tempRes
                    })


                    setTimeout(() => {
                        this.props.preloaderMetod(true, 'Get date from page: ' + temp)
                    }, 0)

                    this.getData(--i)
                } else {
                    setTimeout(() => {
                        this.props.preloaderMetod(true, 'Get date from page: ' + error)
                    }, 0)
                    this.getData(--i)
                }
            });
        } else {
            setTimeout(() => {
                this.props.preloaderMetod(false, '')
            }, 0)
        }
    }

}

export default PagePageData;