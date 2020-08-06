import React from "react";
import "./style.css";

function MovieCard(props){
    return (
        <div className="card">
            <img className="card--image"
                 src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`}
                 alt={props.movie.title + ' poster'}
            />
            <div className="card--content">
                <h3 className="card--title">{props.movie.title}</h3>
                <p><small>RELEASE DATE: {props.movie.release_date}</small></p>
                <p><small>RATING: {props.movie.vote_average}</small></p>
                <p className="card--desc">{props.movie.overview}</p>
            </div>
        </div>
    );
}
export default MovieCard;