import React, {useState} from 'react';
import "./style.css";

export default function SearchMovies(){

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (event) => {
        event.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=190fe8b4332d6e29f2ff4234eb1907da&language=en-US&query=${query}&page=1&include_adult=false`;

        try{
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        }
        catch(err){
            console.error(err);
        }


    }

    return(
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                       placeholder="i.e. Matrix"
                        value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button>Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div key={movie.id} className="card">
                        <img className="card--image"
                             src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                             alt={movie.title + ' poster'}
                        />
                        <div className="card--content">
                            <h3 className="card--title">{movie.title}</h3>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}</small></p>
                            <p className="card--desc">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}