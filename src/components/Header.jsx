import React from 'react'
import { useNavigate } from 'react-router';
import './Header.css'
const Header = () => {
    const navigate = useNavigate()
    return(
        <nav className='col s12 flex'>
            <div className='nav-wrapper blue header'>
                <div className='flex'>
                <span id="header"className='blue pointer' onClick={()=> navigate(`/`)}>My Shows</span>
                <span className='blue pointer' onClick={()=> navigate(`/about`)}>About</span>
                </div>
            
            </div>
        </nav>
    )
}
export default Header;