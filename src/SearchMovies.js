import React from 'react';
import "./style.css";

export default function SearchMovies(){
    return(
        <form className="form">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="i.e. Matrix"/>
            <button>Search</button>
        </form>
    );
}