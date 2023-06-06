import "./Shows.css";
import React from "react";
import { useNavigate } from "react-router";

const Shows = ({ shows }) => {
  const navigate = useNavigate();
  const handleShowClick = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/shows/${id}`);
  };

  return (
    <div className="row gap" id="container">
      {shows.map((show) => (
        <div
          className={`col l4 m6 s12 smallest pointer
              }`}
          key={show.id}
          onClick={() => handleShowClick(show.id)}
        >
          <div className="card border">
            <div className="card-image changedHeight">
              <img
                alt="cover"
                src={show.image.original}
                className="cover-image"
              />
              <a
                href={show.id}
                className="btn-floating halfway-fab blue rating"
              >
                <i className="material-icons">{show.rating.average}</i>
              </a>
            </div>
            <div className={`card-content changedContent `}>
              <p className="card-title">{show.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Shows;
