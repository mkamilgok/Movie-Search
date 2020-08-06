import React, {useState} from 'react';
import "./style.css";
import MovieCard from "./MovieCard";

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
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
}