import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './Search.css'


const Search = ({searchQuery, setSearchQuery}) => {
    return (
        <div className="container">
        
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" placeholder="Search shows" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}/>
          <label className="label-icon"><FontAwesomeIcon icon={faSearch} className='view-icon'/></label>
          <div className="divider"></div>
        </div>
      </form>
    </div>  
        </div>
    )
}
export default Search