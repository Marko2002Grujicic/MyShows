import './Shows.css'
import { useNavigate } from 'react-router';


const Shows = ({shows}) =>{
    const navigate = useNavigate();

    const handleShowClick = (id) => {
        navigate(`/shows/${id}`);
      };

    return (
       
        
        <div className="row gap" id='container'>
        {shows.map(show => (
            <div className={`col l4 m6 s12 smallest`} key={show.id} onClick={()=> handleShowClick(show.id)}>
                <div className="card">
                    <div className="card-image changedHeight">
                        <img src={show.image.original} className="cover-image"/>
                        <a className="btn-floating halfway-fab blue rating"><i className="material-icons">{show.rating.average}</i></a>
                    </div>
                    <div className={`card-content changedContent `} >
                    <p className="card-title">{show.name}</p>
                    </div>
                </div>
            </div>
           
        ))}
            
        </div>
      
    )
}
export default Shows