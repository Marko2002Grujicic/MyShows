import './Shows.css'
import { useNavigate } from 'react-router';


const Shows = ({shows}) =>{
    console.log(shows);
    const navigate = useNavigate();

    const handleShowClick = (id) => {
        navigate(`/shows/${id}`);
      };

    return (
        <>
        <div className="row">
        {shows.map(show => (
            <div className="col s4" key={show.id} onClick={()=> handleShowClick(show.id)}>
                <div className="card">
                    <div className="card-image">
                        <img src={show.image.original} className="cover-image"/>
                        <a className="btn-floating halfway-fab blue rating"><i className="material-icons">{show.rating.average}</i></a>
                    </div>
                    <div className="card-content">
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