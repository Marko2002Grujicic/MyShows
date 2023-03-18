import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"
import './Footer.css'
const Footer = () => {
    return(
        <footer className="blue">
            
                <div className="container">
                <h5 className="white-text">CopyRight  
             <FontAwesomeIcon icon={faCopyright} className='view-icon'/>
                Marko Grujicic </h5>
                </div>
            
            
        </footer>
    )
}
export default Footer