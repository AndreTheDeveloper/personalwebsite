import React, {Component} from 'react';
import '../css/TitleCSS.css';

class Title extends Component {
    render() {
        return (
            <div className='msgContainer'>
                <div className='welcomeMssg'>
                    Welcome, I'm
                </div>
                <div className='name'>
                    ---Andre Colaris---
                </div>
            </div>
        );
    }
}

export default Title;