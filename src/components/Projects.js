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
                            React Website With Springboot Backend API
                        </div>
                        <div className='subTitle'>
                            Group
                        </div>
                        <br/>
                        <div className='projectText'>
                            For our final capstone project, my group and I decided to make
                            a website for an insurance company that is connected to a
                            Springboot based backend that communicates with a database.
                            I was in charge of the entire API and the creation of the database.
                            <br/>
                            <br/>
                            Our database had to hold all the clients personal info as well as
                            the clients insurance information. For this task I used MySQL to create the
                            tables.
                            <br/>
                            <br/>
                            Using Java, I created a full Springboot API that could retrieve clients or
                            insurance information from the database and return them to the front end via post and get
                            requests. The API could also save information to the database from the information that was provided
                            from the front end the same way. I also set up an automated emailing service within the API whenever a
                            new client was created or when a client used the built-in emailing support system. Finally, for bonus marks
                            I implemented a logging feature. Whenever a request was made to the API, the logging service would
                            log it with the current date and time and what the request was.
                        </div>

                    </div>
                    <div className='project2'>
                        <div className='individualProjectTitles'>
                            Android Account Manager Application
                        </div>
                        <div className='subTitle'>
                            Individual
                        </div>
                        <br/>
                        <div className='projectText'>
                            For my first Android application, I thought I would start with something easy yet very handy.
                            As a result I created AccKeep, a secure account managing application.
                            <br/>
                            <br/>
                            This Java based application allows a user to add and edit stored accounts that are entered into the app.
                            All of which are secured with a password that is created on first startup. To be even more protected from
                            potential hackers, all of the account objects created are serialized within a file on the phone itself and
                            not somewhere in the cloud.
                            <br/>
                            <br/>
                            This simple application really took me by surprise by how much I would enjoy using
                            Android Studios and to create interactive apps that I can use day-to-day.
                        </div>
                    </div>
                    <div className='project3'>
                        <div className='individualProjectTitles'>
                            Personal Website Using React
                        </div>
                        <div className='subTitle'>
                            Individual
                        </div>
                        <br/>
                        <div className='projectText'>
                            After not participating much on the react side of the capstone project, I figured it was time
                            to learn. After all, its the most popular framework for web development. After hearing
                            my group members complain non-stop the entire time during development, I was scared and
                            unmotivated to even try. But after watching a few short tutorials and looking at some sample
                            code, I thought I would open up my IDE and try it for myself.
                            <br/>
                            <br/>
                            React really took me by surprise by how organized everything is and the lack of repetitive
                            code. I can make a banner once and use it for all of my pages. I have definitely grown a larger
                            interest for React and want to try and experiment with more complex projects.
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Projects;