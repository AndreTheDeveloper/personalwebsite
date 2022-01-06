import React, {Component} from 'react';
import '../css/backgroundCSS.css'
import Sait from './SaitBackground'
import Job from './GlassmastersBackground'
import Bootcamp from './HarvestBuildersBackground'

class Background extends Component {
    render() {
        return (
            <div className='backgroundContainer'>
                <div className='backgroundTitle'>
                    ---My Experiences---
                </div>
                <Bootcamp />
                <Sait/>
                <Job />
            </div>
        );
    }
}

export default Background;