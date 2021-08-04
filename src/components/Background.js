import React, {Component} from 'react';
import '../css/backgroundCSS.css'
import saitlogo from '../backgrounds/saitlogo.png'

class Background extends Component {
    render() {
        return (
            <div className='backgroundContainer'>
                <div className='backgroundTitle'>
                    ---Who I Am---
                </div>
                <div className='saitContainer'>
                    <img className='saitlogo' src={saitlogo} alt='Sait logo'/>
                    <text className='saitTextContainer'>
                        <div className='saitTitle'>
                            Southern Alberta Institute of Technology
                        </div>
                        <div className='gradDate'>
                            Diploma in Information & Technology, earned in 2021
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
                            enjoy writing code. I never imagined sitting in front of a computer screen and staring
                            at lines of code and figuring out complex algorithms or problems could be so enjoyable,
                            or most importantly, rewarding.
                        </div>
                    </text>
                </div>
            </div>
        );
    }
}

export default Background;