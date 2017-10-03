import React from 'react';

class PageCatalogLinks extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            url: '',
            from: '',
            to: '',
            res: '',
            test: ['111\n/n', 222, 333]
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
        if (
            this.state.to.length > 0 &&
            this.state.from.length > 0 &&
            this.state.url.length > 0 &&
            this.state.from < this.state.to
        ) {
            let arr = []
            for (let i = this.state.from; i <= this.state.to; i++) {
                if (arr.length > 0)
                    arr.push('\n' + this.state.url + i)
                else
                    arr.push(this.state.url + i)
            }
            this.setState({
                res: arr
            })
            console.log(arr, this.state.res)
        } else {
            alert("Enter data!")
        }
    }

}

export default PageCatalogLinks;