import React from 'react';

class PageCatalogLinks extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            url: '',
            from: '',
            to: '',
            res: '',
            preloaderShow: this.props.preloader.show,
            preloaderText: this.props.preloader.text
        }
    }

    render() {
        return (
            <div id={'page-catalog-links'}>
                <div className="info-block">
                    In this section, you can collect links to directories page of which will be used in the future.
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
                setTimeout(()=>{
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
            setTimeout(()=>{
            this.props.preloaderMetod(false, '')
            }, 0)
        } else {
            alert("Enter data!")
        }
    }

}

export default PageCatalogLinks;