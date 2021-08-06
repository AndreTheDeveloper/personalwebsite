import React, {Component} from 'react';
import '../css/ConnectCSS.css'
import githubLogo from '../backgrounds/githublogo.jpg'
import linkedinlogo from '../backgrounds/linkedinlogo.jpg'

class Connect extends Component {
    render() {
        return (
            <div className='mainConnectContainer'>
                <div className='mainConnectTitle'>
                    ---Connect With Me---
                </div>
                <div className='connections'>
                    <div className='gitHub'>
                        I post all my source code to Github
                        <br/>
                        <br/>
                        <a href='https://github.com/AndreTheDeveloper'>
                        <img src={githubLogo} alt='Github Logo' />
                        </a>
                    </div>
                    <div className='linkedIn'>
                        Connect with me on LinkedIn
                        <br/>
                        <br/>
                        <a href='https://www.linkedin.com/in/andrecolaris'>
                        <img src={linkedinlogo} alt='Linkedin Logo' />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Connect;