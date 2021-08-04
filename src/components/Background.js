import React, {Component} from 'react';
import '../css/backgroundCSS.css'
import Sait from './SaitBackground'

class Background extends Component {
    render() {
        return (
            <div className='backgroundContainer'>
                <div className='backgroundTitle'>
                    ---My Journey---
                </div>
                <Sait/>

            </div>
        );
    }
}

export default Background;