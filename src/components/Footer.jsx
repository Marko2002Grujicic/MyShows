import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"
import './Footer.css'
const Footer = () => {
    return(
        <footer className="blue">
            
                <div className="container">
                <h6 className="white-text text">CopyRight
             <FontAwesomeIcon icon={faCopyright} id="icon" className='view-icon'/>
                Marko Grujičić </h6>
                </div>
            
            
        </footer>
    )
}
export default Footer