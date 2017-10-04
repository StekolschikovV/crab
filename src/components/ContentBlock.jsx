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
                    <PageCatalogLinks preloader={this.props.preloader} preloaderMetod={this.preloader.bind(this)} catalogLinks={this.catalogLinks.bind(this)} />
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

    preloader(satus, text) {
        this.props.preloader(satus, text)
    }

    catalogLinks(arr){
        // console.log('catalogLinks', arr)
        this.props.catalogLinks(arr)
    }

}

export default ContentBlock