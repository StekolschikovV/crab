import React from 'react';
import request from 'request'
import cheerio from 'cheerio'

class PagePageData extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tamplate: '{ name: {A} }',
            selectorA: '.user-info__nickname user-info__nickname_small',
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
                        <input type="text" placeholder={'Selector B'}/>
                        <input type="text" placeholder={'Selector C'}/>
                    </div>
                    <div className="line">
                        <input type="text" placeholder={'Selector D'}/>
                        <input type="text" placeholder={'Selector E'}/>
                        <input type="text" placeholder={'Selector F'}/>
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
                    {/*<input type="submit" value={'Get'}/>*/}
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
        // console.log(1, this.state.selectorA, this.props.pageLinks[i], this.props.pageLinks)
        if (i > 0) {
            // new Promise((resolve, reject) => {
            let temp = this.state.tamplate
            request({
                url: this.props.pageLinks[i],
                method: "GET",
                timeout: 500,
                followRedirect: true,
                maxRedirects: 2
            }, (error, response, html) => {
                // console.log(2)
                if (!error && response.statusCode == 200) {
                    let $ = cheerio.load(html)
                    $(this.state.selectorA).each((i, element) => {

                        // setTimeout(() => {
                        //     this.props.preloaderMetod(true, 'Get links: ' + element.attribs.href)
                        // }, 0)

                        // let temp = this.state.res
                        // if (typeof temp == 'string') {
                        //     temp = temp.split(",")
                        // }
                        // if (temp.length > 0)
                        //     temp.push('\n' + element.attribs.href)
                        // else
                        //     temp.push(element.attribs.href)
                        //
                        // this.props.pageLinksSend(temp)
                        // this.setState({
                        //     res: temp
                        // })

                        // console.log(element.children.['0'].data)
                        // console.log(element.children.['0'])
                        // console.log(element.children[0].data)
                        let res = element.children[0].data
                        temp = temp.replace(/{A}/, '\"' + res + '\"' )

                        let tempRes = this.state.res
                        console.log(tempRes, typeof temp == 'string')
                        // if (typeof temp == 'string') {
                        //     tempRes = tempRes.split(",")
                        // }
                        if (tempRes.length > 0)
                            tempRes.push('\n' + temp)
                        else
                            tempRes.push(temp)

                        // this.props.pageLinksSend(tempRes)
                        this.setState({
                            res: tempRes
                        })
                    });
                    // console.log(3)
                    // resolve("result");
                    this.getData(--i)
                } else {
                    // console.log(4)
                    // setTimeout(() => {
                    //     this.props.preloaderMetod(true, `Get ${this.props.catalogLinks[i]} err: ${error}`)
                    // }, 0)
                    // resolve("result");
                    this.getData(--i)
                }
            });
            // }).then(
            //     result => {
            //         console.log(5)
            //         setTimeout(() => {
            //             this.getData(--i)
            //         }, 500)
            //     },
            //     error => {
            //         console.log(6)
            //         setTimeout(() => {
            //             this.getData(--i)
            //         }, 500)
            //     }
            // )
        } else {
            // console.log(7)
            // setTimeout(() => {
            //     this.props.preloaderMetod(false, '')
            // }, 0)
        }
    }

}

export default PagePageData;