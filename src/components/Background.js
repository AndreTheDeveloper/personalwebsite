import React, {Component} from 'react';
import '../css/backgroundCSS.css'
import Sait from './SaitBackground'
import Job from './GlassmastersBackground'

class Background extends Component {
    render() {
        return (
            <div className='backgroundContainer'>
                <div className='backgroundTitle'>
                    ---My Experiences---
                </div>
                <Sait/>
                <Job />
            </div>
        );
    }
}

export default Background;