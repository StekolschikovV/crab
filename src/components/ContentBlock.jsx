import React from 'react';
import PageCatalogLinks from './PageCatalogLinks.jsx'
import PagePageLinks from './PagePageLinks.jsx'
import PagePageData from './PagePageData.jsx'
import PagePageInfo from './PagePageInfo.jsx'

class ContentBlock extends React.Component {

    constructor(props) {
        super(props)
        this.menu = this.props.data
    }

    render() {
        return (
            <div id={'content-block'}>
                <span className={this.menu.catalog ? 'active' : ''}>
                    <PageCatalogLinks/>
                </span>
                <span className={this.menu.links ? 'active' : ''}>
                       <PagePageLinks/>
                </span>
                <span className={this.menu.data ? 'active' : ''}>
                    <PagePageData/>
                </span>
                <span className={this.menu.info ? 'active' : ''}>
                      <PagePageInfo/>
                </span>
            </div>
        )
    }

}

export default ContentBlock