import React from 'react';

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
                    <h1>Crab</h1>
                    <h3>v 1.0.0</h3>
                    <h2>Crab - a program to collect data from sites. With this program you can collect account information or data of goods from online stores. The program allows you to get links to directories, links pages and data pages in a convenient format If you need to skip any of the floor you can do it without fear.</h2>
                </div>
                <div className="copirates">
                    <h3>Stekolschikov 2017</h3>
                </div>
            </div>
        );
    }
}

export default PagePageInfo;