import React from 'react';
import {version, name, repository} from '../../package.json'
import opn from 'opn'

class PagePageInfo extends React.Component {

    constructor(props) {
        super(props)
        this.menu = this.props.data
    }

    render() {
        return (
            <div id={'page-page-info'}>
                <div className="top">
                    <img src="img/crab.png" unselectable="on"/>
                </div>
                <div className="bottom">
                    <h1>{name}</h1>
                    <h3>v {version}</h3>
                    <h2>
                        Crab is an open source program designed to scrubbing and clean data from various sources. You can
                        generate links to directories, scrubbing links from catalogs to pages and get data in any format.
                        Also you can use only one stage in data processing. In any case, everything will be absolutely
                        free and open!
                    </h2>
                </div>
                <div className="copirates">
                    <h3>
                        <a
                            href="#"
                            onClick={this.linkToGit}
                        >
                            Crab on github
                        </a>
                    </h3>
                </div>
            </div>
        );
    }

    linkToGit(e) {
        e.preventDefault()
        opn('https://github.com/StekolschikovV/crab')
    }

}

export default PagePageInfo;