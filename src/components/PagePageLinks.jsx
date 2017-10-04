import React from 'react';

class PagePageLinks extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id={'page-page-links'}>
                <div className="info-block">
                    In this section you can get links to pages from links on the collection page
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        console.log(this.props.catalogLinks)
                    }}
                >
                    <div className="line">
                        <input type="text" placeholder={'a.linkToPage'} className={'big-input'}/>
                        <input type="submit" value={'Get'}/>
                    </div>
                </form>
                <textarea placeholder={'The results will be here...'}/>
            </div>
        );
    }

}

export default PagePageLinks;