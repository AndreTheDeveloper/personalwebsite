import React, {Component} from 'react';
import '../css/GlassmastersCSS.css'
import glassmasterslogo from "../backgrounds/glassmasterslogo.png";

class GlassmastersBackground extends Component {
    render() {
        return (
            <div className='glassmastersContainer'>
                <img className='glassmasterslogo' src={glassmasterslogo} alt='Sait logo'/>
                <div className='glassmastersTextContainer'>
                    <div className='glassmastersTitle'>
                        GlassMasters Autoglass Technician
                    </div>
                    <div className='startDate'>
                        Spring 2017 - Current Date
                    </div>
                    <br />
                    <div className='glassmastersBackground'>
                        Being a technician with GlassMasters has given me the opportunity to learn more about
                        responsibility with running my own crew, mentoring and patience from teaching new hires,
                        keeping a positive attitude when dealing with customers and keeping a steady mind and not to
                        over react when something doesnt go as planned.
                        <br />
                        <br />
                        GlassMasters has not just taught me how to work on peoples vehicles but also
                        how the real world works. Before GlassMasters I was in highschool with no responsibilities and they
                        took me in and forged me into who I am today. They kick started my passion for vehicles and I have
                        been obsessed ever since.
                        <br/>
                        <br/>
                        As deep as my passion for cars is. Its not programming. Its not as satisfying as seeing your
                        program compile with no errors or creating something that people will use and enjoy. GlassMasters
                        showed me to keep vehicles as a hobby and focus on programming as my career.
                    </div>
                </div>
            </div>
        );
    }
}

export default GlassmastersBackground;