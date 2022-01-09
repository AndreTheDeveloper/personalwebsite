import React, {Component} from 'react';
import '../css/CertificatesCSS.css'
import amigosCert from '../backgrounds/SpringbootCert.PNG';
import harvestCert from '../backgrounds/harvestbuildersCert.PNG';

class Certificates extends Component {
    render() {
        return (
            <div>
                <div className='certMainTitle'>
                    ---Earned Certificates---
                </div>
                <div className='certContainer'>
                    <div className='cert1'>
                        <div className='individualCertTitles'>
                            Amigoscode - Getting Started with Spring Boot
                        </div>
                        <div className='imgContainer'>
                            <img className='certImg' src={amigosCert} alt='Amigoscode Certification'></img>
                        </div>
                    </div>

                    <div className='cert2'>
                        <div className='individualCertTitles'>
                                Harvest Builders - Samurai Pizza Cats
                        </div>
                        <div className='imgContainer'>
                            <img className='certImg' src={harvestCert} alt='Harvest Builders Certification'></img>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Certificates