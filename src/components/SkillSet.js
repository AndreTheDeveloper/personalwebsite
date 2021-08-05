import React, {Component} from 'react';
import '../css/SkillSetCSS.css'

class SkillSet extends Component {
    render() {
        return (
            <div>
                <div className='skillSetMainTitle'>
                    ---Skills---
                </div>
                <div className='skillSetContainer'>
                    <div className='programmingContainer'>
                        <div className='programmingTitle'>
                            Programming
                        </div>
                        <div className='programmingText'>
                            Java<br/>
                            JavaScript<br/>
                            API<br/>
                            MySQL<br/>
                            SQLPlus<br/>
                            CSS<br/>
                            SpringBoot<br/>
                            React<br/>
                            HTML<br/>

                        </div>
                    </div>
                    <div className='characterContainer'>
                        <div className='characterTitle'>
                            Character
                        </div>
                        <div className='characterText'>
                            Positive<br/>
                            Cooperative<br/>
                            Disciplined<br/>
                            Ambitious<br/>
                            Honest<br/>
                            Easy-going<br/>
                            Motivated<br/>
                            Adaptable<br/>
                            Dependable<br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillSet;