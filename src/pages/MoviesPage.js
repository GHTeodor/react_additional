import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './Pages.css';
import {Movies, PagesComponent} from "../components";
import {getAllMovies} from "../store/movies.slice";

const MoviesPage = () => {
    const {movies, status, error, page} = useSelector(state => state["moviesReducer"]);

    const {genre} = useSelector(state => state["genresReducer"]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies({page, genre}));
    }, [page, genre]);

    return (
        <div>
            <div className="moviesPage">
                {status === 'pending' && <h1>Loading...</h1>}
                {error && <h2>{error}</h2>}
                {movies.results?.map(movie => <Movies key={movie.id} movies={movie}/>)}
            </div>
            {movies.page && <PagesComponent page={page}/>}
        </div>
    );
};

export {MoviesPage};