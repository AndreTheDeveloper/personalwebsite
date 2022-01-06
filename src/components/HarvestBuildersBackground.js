import { Component } from "react/cjs/react.production.min";
import harvestlogo from "../backgrounds/harvestlogo.png";
import "../css/harvestCSS.css"


class HarvestBuildersBackground extends Component {
    render () {
        return (
            <div className='harvestContainer'>
                <img className='harvestLogo' src={harvestlogo} alt='Harvest logo'/>
                <div className="harvestTextContainer">
                    <div className="harvestTitle">
                        Harvest Builders Bootcamp
                    </div>
                    <div className='secondaryTitle'>
                        November 2021 - December 2021
                    </div>
                    <br />
                    <div className="harvestBackground">
                        Harvest Builders invited me to an online, do at your own pace boot-camp. I had six weeks to develop and test
                        a website using Typescript that is able to display and edit pizzas by making calls to a provided database using MongoDB. 
                        <br />
                        <br />
                        This experience was on a different level then what I imagined. I learned how to use Typescript, MongoDB queries and mutations, JTest describe blocks, Material-ui for designing,
                        cursor pagination, Github pull requests and more. This boot-camp really gave me a taste of what is to be expected in real-world applications.  
                    </div>


                </div>


            </div>
        )
    }
}

export default HarvestBuildersBackground