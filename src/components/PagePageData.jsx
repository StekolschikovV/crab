import React from 'react';

class PagePageData extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id={'page-page-data'}>
                <div className="info-block">
                    In this section, you can take the data with each page selected
                </div>
                <form>
                    <div className="line">
                        <input type="text" placeholder={'Selector A'}/>
                        <input type="text" placeholder={'Selector B'}/>
                        <input type="text" placeholder={'Selector C'}/>
                    </div>
                    <div className="line">
                        <input type="text" placeholder={'Selector D'}/>
                        <input type="text" placeholder={'Selector E'}/>
                        <input type="text" placeholder={'Selector F'}/>
                    </div>
                    <div className="line">
                        <input type="text" placeholder={'Template to save the data'} className={'big-input'}/>
                        <input type="submit" value={'Get'}/>
                    </div>
                    {/*<input type="submit" value={'Get'}/>*/}
                </form>
                <textarea placeholder={'The results will be here...'}/>
            </div>
        );
    }
}

export default PagePageData;