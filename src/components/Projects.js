import React, {Component} from 'react';
import '../css/ProjectsCSS.css'

class Projects extends Component {
    render() {
        return (
            <div>
                <div className='projectsMainTitle'>
                    ---Projects I Was Involved In---
                </div>
                <div className='projectsContainer'>
                    <div className='project1'>
                        <div className='individualProjectTitles'>
                            React Website with Springboot backend API
                        </div>
                        <div className='subTitle'>
                            Group
                        </div>
                    </div>
                    <div className='project2'>
                        <div className='individualProjectTitles'>
                            Android Account Manager App
                        </div>
                        <div className='subTitle'>
                            Individual
                        </div>
                    </div>
                    <div className='project3'>
                        <div className='individualProjectTitles'>
                            This React Website
                        </div>
                        <div className='subTitle'>
                            Individual
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Projects;