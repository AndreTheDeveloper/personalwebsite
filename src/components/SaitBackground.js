import React, {Component} from 'react';
import saitlogo from "../backgrounds/saitlogo.png";
import '../css/SaitCSS.css'

class SaitBackground extends Component {
    render() {
        return (
            <div className='saitContainer'>
                <img className='saitlogo' src={saitlogo} alt='Sait logo'/>
                <div className='saitTextContainer'>
                    <div className='saitTitle'>
                        Southern Alberta Institute of Technology
                    </div>
                    <div className='gradDate'>
                        Diploma in Information & Technology, Majoring in Software Development, earned in 2021
                    </div>
                    <br />
                    <div className='saitBackground'>
                        When it comes to hands on learning, there is no arguing Sait performs extraordinarily well.
                        Although I dont have a degree in Computer Science, as I would have achieved if I chose to
                        do my education at a College or University, I strongly feel like I got the same amount of
                        education and maybe even more hands on learning at Sait. I was pushed harder then I ever imagined
                        and even struggled at times with their fast paced curriculum.
                        <br />
                        <br />
                        Sait did not just teach me to write code, but they also taught me that I deeply
                        enjoy writing code. I never imagined sitting in front of a computer screen, staring
                        at lines of code and figuring out complex algorithms or problems could be so enjoyable,
                        or most importantly, rewarding.
                        <br/>
                        <br/>
                        Without Sait I would not be where I am today or where I truly want to be in the future.
                    </div>
                </div>
            </div>
        );
    }
}

export default SaitBackground;