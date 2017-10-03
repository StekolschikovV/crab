import React from 'react';

class Preloader extends React.Component {

    constructor(props) {
        super(props)
        this.preloader = this.props.data
    }

    render() {
        return (
            <div id={'preloader'} className={this.preloader.show ? 'show' : '' }>
                <div className="center">
                    <img src="./img/preloader.png"/>
                    <div className="text">{this.preloader.text}</div>
                </div>
            </div>
        );
    }

}

export default Preloader;