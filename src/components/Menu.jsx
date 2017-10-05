import React from 'react';

class Menu extends React.Component {

    constructor(props) {
        super(props)
        this.menu = this.props.data
    }

    render() {
        return (
            <div id={'menu'}>
                <ul id={'menu-top'}>
                    <li className={this.menu.catalog ? 'active' : ''} onClick={this.props.menuSelectEl} data-id={'catalog'}>
                        1. Catalog links
                    </li>
                    <li className={this.menu.links ? 'active' : ''} onClick={this.props.menuSelectEl.bind(this)} data-id={'links'}>
                        2. Page links
                    </li>
                    <li className={this.menu.data ? 'active' : ''} onClick={this.props.menuSelectEl.bind(this)} data-id={'data'}>
                        3. Page data
                    </li>
                </ul>
                <ul id={'menu-bottom'}>
                    <li className={this.menu.info ? 'active' : ''} onClick={this.props.menuSelectEl.bind(this)} data-id={'info'}>
                        Info
                    </li>
                </ul>
            </div>
        );
    }

}

export default Menu;