import React from 'react';

class Preloader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id={'preloader'} className={this.props.data.show ? 'show' : '' }>
                <div className="center">
                    <img src="./img/preloader.png"/>
                    <div className="text">{this.props.data.text}</div>
                </div>
            </div>
        );
    }

}

export default Preloader;