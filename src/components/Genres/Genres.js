import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {addGenreThunk} from "../../store/genres.slice";
import Badges from "./Badges/Badges";


const Genres = ({genres: {id, name}}) => {

    const {darkMode} = useSelector(state => state["moviesReducer"]);
    const dispatch = useDispatch();

    return (
        <div className={darkMode ? "genresDark" : "genres"}>
            <Link style={darkMode ? {color: "lightyellow"} : {color: "blue"}}
                  to="/movies" onClick={() => dispatch(addGenreThunk(id))}><Badges id={id} name={name}/></Link>
        </div>
    );
};

export {Genres};