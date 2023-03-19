import './Shows.css'
import { useNavigate } from 'react-router';


const Shows = ({shows}) =>{
    const navigate = useNavigate();

    const handleShowClick = (id) => {
        navigate(`/shows/${id}`);
      };
      
    const ratingHandler = (show) => {
        if(!show){
            return null;
        }
        let className = ""
        if (show.rating.average > 8.5) {
                className='yellow'
        }
        return className
    }

    return (
        <>
        
        <div className="row gap">
        {shows.map(show => (
            <div className={`col l4 m6 s12 `} key={show.id} onClick={()=> handleShowClick(show.id)}>
                <div className="card">
                    <div className="card-image">
                        <img src={show.image.original} className="cover-image"/>
                        <a className="btn-floating halfway-fab blue rating"><i className="material-icons">{show.rating.average}</i></a>
                    </div>
                    <div className={`card-content ${ratingHandler(show)}`} >
                    <p className="card-title">{show.name}</p>
                    </div>
                </div>
            </div>
           
        ))}
            
        </div>
        </>
    )
}
export default Shows