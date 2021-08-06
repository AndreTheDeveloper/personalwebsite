import React, {Component} from 'react';
import '../css/MyMotosCSS.css'

class MyMotos extends Component {
    render() {
        return (
            <div className='motoMainContainer'>
                <div className='motoMainTitle'>
                    ---Inside My Mind---
                </div>
                <div className='motos'>
                    "It only takes a second to smile"
                    <br/>
                    <br/>
                    "Pursue the passion, not the paychecks"
                    <br/>
                    <br/>
                    "Dont be afraid to make mistakes, be afraid of giving up"
                    <br/>
                    <br/>
                    "Not knowing something, doesn't make you unintelligent"
                    <br/>
                    <br/>
                    "Forgiveness over hatred"
                </div>
            </div>
        );
    }
}

export default MyMotos;