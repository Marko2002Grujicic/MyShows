import { useEffect, useState } from "react"
import { useParams } from "react-router";
import './SingleShowPage.css'
import { LoadingAnimation } from "../LoadingAnimation/LoadingAnimation";

const SingleShowPage = () => {
    const [singleShow, setSingleShow] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast&embed[]=crew&embed[]=episodes&embed[]=akas`)
          .then((response) => response.json())
          .then((data) =>{
            setSingleShow(data)})
      }, [id]);

      const capitalizeName = (name) => {
        return  name.toUpperCase();
      }
      const renderGenres = ({ genres }) => (
            <div>
          {genres.map((genre, index) => (
            <span className="#e0e0e0 grey lighten-2  btn tags" key={index}>{genre}</span>
          ))}
        </div>
        );

      const renderCast = (cast) => {
        
        if(!cast){
            return null;
        }
        const castSliced = cast.slice(0,8);
        console.log(cast)
        return(
            
            castSliced.map((member) => (
                <div className="col s3">
                <div className="card cast">
                    <div class="card-image">
                        <img src={member.person.image.original} className="singlePageCast-image"/>
                        <span class="card-title singlePageCast-text">{member.person.name}</span>
                    </div>
                </div>
                </div>
        )
          ))};
     

    return(
        <div className="container">
            {Object.keys(singleShow).length > 0 ? (
                <div className="row">
                    <div className="col s5">
                <img src={singleShow.image.original} className="singlePage-image"/>
                </div>
                <div className="col s7">
                    <div className="section">
                        <h2>{capitalizeName(singleShow.name)}</h2>
                    </div>
                    <div className="section">
                        {renderGenres(singleShow)}
                    </div>
                    <div className="section">
                        {(singleShow.summary)}
                    </div>
                </div>
                <div className="row">
                    
                        <div className="col s12">
                        <h2>Cast</h2>
                            {singleShow._embedded.cast && renderCast(singleShow._embedded.cast)}
                            </div>
                        </div>
                        
            </div>
            ): (
                <LoadingAnimation/>
            )}
            
        </div>
    )
}
export default SingleShowPage