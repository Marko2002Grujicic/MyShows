import './About.css'
import React from 'react'
const About = () => {

    return(
        <div className="container about">
            <div className="section ">
                <h3 className="title">About</h3>
                <p>This project is created with 
                <span > TvMaze API</span>, 
                <span > React</span>, 
                <span > Materialize</span>, 
                <span > Javascript</span>, 
                <span > Html</span> and 
                <span> Css</span> </p>
            </div>
            <div className='divider'></div>
            <div className='section'>
                <p><a id="cursor" href='https://github.com/Marko2002Grujicic/BitShowReact' > Check the source code here </a></p>
        </div>
        </div>
        
    )
}
export default About;