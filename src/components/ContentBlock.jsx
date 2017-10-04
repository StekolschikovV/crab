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
                    <PageCatalogLinks
                        // preloader={this.props.preloader}
                        preloaderMetod={this.preloader.bind(this)}
                        catalogLinksSend={this.catalogLinksSend.bind(this)}
                    />
                </span>
                <span className={this.menu.links ? 'active' : ''}>
                       <PagePageLinks
                           preloaderMetod={this.preloader.bind(this)}
                           catalogLinks={this.props.catalogLinks}
                           pageLinksSend={this.props.pageLinksSend}
                       />
                </span>
                <span className={this.menu.data ? 'active' : ''}>
                    <PagePageData
                        pageLinks={this.props.pageLinks}
                    />
                </span>
                <span className={this.menu.info ? 'active' : ''}>
                      <PagePageInfo/>
                </span>
            </div>
        )
    }

    preloader(satus, text) {
        this.props.preloader(satus, text)
    }

    catalogLinksSend(arr){
        this.props.catalogLinksSend(arr)
    }

}

export default ContentBlock