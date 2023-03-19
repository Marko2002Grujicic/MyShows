import './About.css'
const About = () => {

    return(
        <div className="container about">
            <div className="section ">
                <h3 className="title">About</h3>
                <p>This project is created with 
                <a id='cursor'  href='https://www.tvmaze.com/api'> TvMaze API</a>, 
                <a id='cursor'  href='https://react.dev'> React</a>, 
                <a id='cursor'  href='https://materializecss.com'> Materialize</a>, 
                <a id='cursor'  href='https://en.wikipedia.org/wiki/JavaScript'> Javascript</a>, 
                <a id='cursor'  href='https://en.wikipedia.org/wiki/HTML'> Html</a> and 
                <a id='cursor'  href='https://en.wikipedia.org/wiki/CSS'> Css</a> </p>
            </div>
            <div className='divider'></div>
            <div className='section'>
                <p><a id="cursor" href='https://github.com/Marko2002Grujicic/BitShowReact' > Check the source code here </a></p>
        </div>
        </div>
        
    )
}
export default About;