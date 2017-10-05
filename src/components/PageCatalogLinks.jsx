import React from 'react';

class PageCatalogLinks extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            url: '',
            // url: 'https://habrahabr.ru/all/page',
            from: '',
            // from: '0',
            to: '',
            // to: '5',
            res: ''
        }
    }

    render() {
        return (
            <div id={'page-catalog-links'}>
                <div className="info-block">
                    You this section you can generate links to catalog. Specify the base address and specify the range in which to generate links. For example https://habrahabr.ru/all/page from 1 to 50.
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        this.genetar()
                    }}
                >
                    <div className="line">
                        <input
                            type="text"
                            placeholder={'www.example.com/?page='}
                            className={'big-input'}
                            value={this.state.url}
                            onChange={(e) => {
                                this.setState({
                                    url: e.target.value
                                })
                            }}
                        />
                        <span>
                            + int
                        </span>
                        <input
                            type="text"
                            placeholder={'from'}
                            className={'min-input'}
                            value={this.state.from}
                            onChange={(e) => {
                                this.setState({
                                    from: e.target.value
                                })
                            }}
                        />
                        <input
                            type="text"
                            placeholder={'to'}
                            className={'min-input'}
                            value={this.state.to}
                            onChange={(e) => {
                                this.setState({
                                    to: e.target.value
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
                        this.sendCatalogLinks()
                    }}
                />
            </div>
        );
    }

    genetar() {
        if (this.state.to.length > 0 && this.state.from.length > 0 &&
            this.state.url.length > 0 && this.state.from < this.state.to) {
            let arr = []
            for (let i = this.state.from; i <= this.state.to; i++) {
                setTimeout(() => {
                    this.props.preloaderMetod(true, 'Generation links: ' + this.state.url + i)
                }, 0)
                if (arr.length > 0)
                    arr.push('\n' + this.state.url + i)
                else
                    arr.push(this.state.url + i)
                if (i == this.state.to)
                    this.props.preloaderMetod(false, '')
            }
            this.setState({
                res: arr
            })
            setTimeout(() => {
                this.props.preloaderMetod(false, '')
                this.sendCatalogLinks()
            }, 0)

        } else {
            alert("Enter data!")
        }
    }

    sendCatalogLinks() {
        this.props.catalogLinksSend(this.state.res)
    }

}

export default PageCatalogLinks;