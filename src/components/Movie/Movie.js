import React from 'react';
import {useLocation} from "react-router-dom";

import '../components.css';
import {MovieGenre, StarRating} from "../../components";


const Movie = () => {
    const {state: {id, title, overview, vote_count, vote_average, backdrop_path}} = useLocation();
    const img = "https://image.tmdb.org/t/p/w500" + backdrop_path;

    return (
        <div className="movie">
            <MovieGenre id={id} img={img}/>
            <h1>{title}</h1>
            <h2>{overview}</h2>
            <StarRating vote_count={vote_count} vote_average={vote_average}/>
        </div>
    );
};

export {Movie};