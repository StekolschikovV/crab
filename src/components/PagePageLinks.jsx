import React from 'react';
import request from 'request'
import cheerio from 'cheerio'

class PagePageLinks extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            seletor: '',
            res: 'aaa'
        }
    }

    render() {
        return (
            <div id={'page-page-links'}>
                <div className="info-block">
                    In this section you can get links to pages from links on the collection page
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        this.getPageLink(this.props.catalogLinks.length)
                    }}
                >
                    <div className="line">
                        <input
                            type="text"
                            placeholder={'a.linkToPage'}
                            className={'big-input'}
                            onChange={(e)=>{
                                this.setState({
                                    seletor: e.target.value
                                })
                            }}
                        />
                        <input type="submit" value={'Get'}/>
                    </div>
                </form>
                <textarea
                    placeholder={'The results will be here...'}
                    value={this.state.res}
                    onChange={(e)=>{
                        this.setState({
                            res: e.target.value
                        })
                    }}
                />
            </div>
        );
    }

    getPageLink(i) {
        // console.log('getPageLink', this.props.catalogLinks[i], i, this.props.catalogLinks)
        // console.log('console.log(this.state.seletor)', this.state.seletor)
        // this.setState({
        //     res: ''
        // })


        if(i > 0){
            // console.log('this.props.catalogLinks[i]', this.props.catalogLinks[i - 1])
            // console.log('this.props.catalogLinks', this.props.catalogLinks)
            // console.log('i', i)
            console.log(this.state.res)
            new Promise((resolve, reject) => {
                request(this.props.catalogLinks[i], function (error, response, html) {
                    if (!error && response.statusCode == 200) {
                        var $ = cheerio.load(html);
                        $('.post__title_link').each(function (i, element) {
                            // var a = $(this).prev();
                            // console.log(a.text());
                            // console.log($(this).attr('href'));


                            console.log(this.state.res)
                            // temp.push($(this).attr('href'))
                            // this.setState({
                            //     res: temp
                            // })

                        });

                        resolve("result");
                    } else {
                        console.log('sss', this.state.res)
                        reject("result");
                    }

                });
            }).then(
                result => {
                    console.log('--------------------------------------------------------- OK')
                    this.getPageLink(--i)
                },
                error => {
                    console.log('--------------------------------------------------------- ER!')
                    this.getPageLink(--i)
                }
            );


        }
    }

}

export default PagePageLinks;