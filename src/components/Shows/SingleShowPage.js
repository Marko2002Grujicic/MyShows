import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./SingleShowPage.css";
import { LoadingAnimation } from "../LoadingAnimation/LoadingAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faThList } from "@fortawesome/free-solid-svg-icons";
import CastGrid from "./Cast/CastGrid";
import CastList from "./Cast/CastList";

const SingleShowPage = ({ layout, setLayout, setIsLoading }) => {
  const [singleShow, setSingleShow] = useState({});
  const { id } = useParams();
  const [storedId, setStoredId] = useState(() =>localStorage.getItem("storedId") || id)
   useEffect(() => {
    const storedLayout = localStorage.getItem("layout") || layout;
    setLayout(storedLayout);
    localStorage.setItem('storedId', storedId)
    fetch(`https://api.tvmaze.com/shows/${storedId}?embed[]=seasons&embed[]=cast`)
      .then((response) => response.json())
      .then((data) => {
      setSingleShow(data);
      });
      return () => {
        localStorage.removeItem("storedId");
      };
  }, [storedId, setLayout, layout]);
 
  useEffect(() => {
    localStorage.setItem("layout", layout);
  }, [layout]);

  const capitalizeName = (name) => {
    return name.toUpperCase();
  };

  const renderGenres = ({ genres }) => (
    <div>
      {genres.map((genre, index) => (
        <span className="#e0e0e0 grey lighten-2 btn tags" key={index}>
          {genre}
        </span>
      ))}
    </div>
  );

  const handleToggleLayout = () => {
    const newLayout = layout === "grid" ? "list" : "grid";
    setLayout(newLayout);
    localStorage.setItem("layout", newLayout);
  };

  function stripTags(summary) {
    return summary.replace(/(<([^>]+)>)/gi, "");
  }

  if(!singleShow){
    setIsLoading(true)
  }
  console.log(singleShow);
  return (
    
    <div className="container" id="container" >
      {Object.keys(singleShow).length > 0 ? (
        <div className="row gap" >
          <div className="col s12 l6">
            <img src={singleShow.image.original} alt="" className="singlePage-image" />
          </div>
          <div className="col s12 l6">
            <div className="row">
              <div className="section">
                <h3>{capitalizeName(singleShow.name)}</h3>
              </div>
            </div>
            <div className="row">
              <div className="section">{renderGenres(singleShow)}</div>
            </div>
            <div className="row">
              <div className="section">
                <div className="col m12 summary">{stripTags(singleShow.summary)}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="divider"></div>
              <h3 className="toggleButton">
                Cast
                <FontAwesomeIcon
                  onClick={handleToggleLayout}
                  className="view-icon"
                  icon={layout === "list" ? faTh : faThList}
                />
              </h3>
              {layout === "list" ? (
                  <CastList cast={singleShow._embedded.cast} />
                
              ) : (
                <CastGrid cast={singleShow._embedded.cast} />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col s12">
                <div className="col s12">
                <h4>Seasons:</h4>
                </div>
                
                <div className="col s12">
                  {singleShow._embedded.seasons.map(season => (
                    <a href={season.url} id='cursor' target="_blank">
                      <div className={`col l4 m6 s12 season center`} key={season.id} >
                    <div className="card pointer">
                        <div className="card-image changedHeight smallImage">
                            <img src={season.image.original} className="cover-image" alt="cover"/>
                        </div>
                        <div className={`card-content `} >
                        <p className="card-title">Season: {season.number}</p>
                        </div>
                    </div>
                </div>
                    </a>
                    
                  ))}
                </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
};

export default SingleShowPage;
