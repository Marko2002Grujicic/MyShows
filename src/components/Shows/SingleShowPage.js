import { useEffect, useState } from "react"
import { useParams } from "react-router";
import './SingleShowPage.css'
import { LoadingAnimation } from "../LoadingAnimation/LoadingAnimation";

const SingleShowPage = () => {
    const [singleShow, setSingleShow] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
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
                        {singleShow.summary}
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