import React from 'react';
import {render} from 'react-dom';
import Menu from './components/Menu.jsx';
import ContentBlock from './components/ContentBlock.jsx';
import Preloader from './components/Preloader.jsx';

import './style.sass';

class Crab extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            menu: {
                catalog: false,
                links: false,
                data: false,
                info: true
            },
            preloader: {
                show: false,
                text: ''
            },
            catalogLinks: []
        }
    }


    render() {
        return (
            <div>
                <Menu data={this.state.menu} menuSelectEl={this.menuSelectEl.bind(this)}/>
                <ContentBlock data={this.state.menu} preloader={this.preloader.bind(this)} catalogLinks={this.catalogLinks.bind(this)} />
                <Preloader data={this.state.preloader}/>
            </div>
        );
    }

    menuSelectEl(e){
        let m = this.state.menu
        m.catalog = false
        m.links = false
        m.data = false
        m.info = false
        m[e.target.getAttribute('data-id')] = true
        this.setState({
            menu: m
        })
    }

    preloader(satus, text) {
        this.setState({
            preloader: {show: satus, text: text}
        })
    }

    catalogLinks(arr){
        let res = []
        if(typeof arr == 'object'){
            res = arr
        } else if(typeof arr == 'string'){
            res = arr.split(",")
        }

        let clearArr = []
        res.map((el)=>{
            clearArr.push(el.trim())
        })
    }
}

render(<Crab/>, document.getElementById('app'));