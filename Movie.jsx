import React from "react";
import "./Movie.css";
import movies from "../movies";

const Movie = () => {
  return (
    <div className="movies12">
      {movies.map((items, index) => {
        return (
          <div className="movie">
            <div className="card">
              <img
                src={items.image}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{items.title}</h5>
                <p className="card-text">
                    {items.language}
                </p>
                <a href="#" className="btn btn-primary">
                  {items.cost}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
