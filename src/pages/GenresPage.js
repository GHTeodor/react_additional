import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './Pages.css';
import {getAllGenres} from "../store/genres.slice";
import {Genres} from "../components";


const GenresPage = () => {
    const {genres, status, error} = useSelector(state => state["genresReducer"]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, []);

    return (
        <div className="genresPage">
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {genres.genres?.map(genre_1 => <Genres key={genre_1.id} genres={genre_1}/>)}
            {genres && <small id="beta_small">*beta works well only on the first pages</small>}
        </div>
    );
};

export {GenresPage};