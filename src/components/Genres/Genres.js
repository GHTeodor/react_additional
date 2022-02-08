import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {addGenreThunk} from "../../store/genres.slice";


const Genres = ({genres: {id, name}}) => {

    const {darkMode} = useSelector(state => state["moviesReducer"]);
    const dispatch = useDispatch();

    return (
        <div className={darkMode ? "genresDark" : "genres"}>
            <Link to="/movies" onClick={() => dispatch(addGenreThunk(id))}>{name}</Link>
        </div>
    );
};

export {Genres};