
import { useNavigate } from 'react-router';
import './Header.css'
const Header = () => {
    const navigate = useNavigate()
    return(
        <nav className='col s12'>
            <div className='nav-wrapper blue'>
            <a className='brand-logo blue' onClick={()=> navigate(`/`)}>My Shows</a>
            </div>
            
        </nav>
    )
}
export default Header;