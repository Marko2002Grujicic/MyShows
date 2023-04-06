import { useNavigate } from "react-router";
import './Search.css'

const SearchedShows = ({shows, setSearchQuery, setIsLoading}) =>{
    const navigate = useNavigate();
    const handleShowClick = (id) => {
        navigate(`/shows/${id}`);
        setSearchQuery("");
      };
      if(!shows) return setIsLoading(true)
    return (
        <>
        <div className="row gap">
        {shows.map(show => (
            <div className={`col l4 m6 s12 `} key={show.show.id} onClick={()=> handleShowClick(show.show.id)}>
                <div className="card pointer">
                    <div className="card-image changedHeight">
                        <img src={show?.show?.image?.original} className="cover-image" alt="cover"/>
                        <a href={show.show.id} className="btn-floating halfway-fab blue rating"><i className="material-icons">{show.show.rating.average}</i></a>
                    </div>
                    <div className={`card-content `} >
                    <p className="card-title">{show.show.name}</p>
                    </div>
                </div>
            </div>
           
        ))}
            
        </div>
        </>
    )
}
export default SearchedShows