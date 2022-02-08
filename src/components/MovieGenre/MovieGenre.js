import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getInfoThunk} from "../../store/info.slice";


const MovieGenre = ({id, img}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfoThunk(id));
    }, [id]);

    const {status, error, movieInfo: {genres}} = useSelector(state => state["infoReducer"]);
    const {darkMode} = useSelector(state => state["moviesReducer"]);

    return (
        <div style={{backgroundImage: `url(${img})`, width: "500px", height: "281px"}}>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {genres?.map(genre => <u className={darkMode ? "dark-mode" : "light-mode"}
                                     style={{opacity: ".4"}}
                                     key={genre.id}><br/>{genre.name}</u>)}
        </div>
    );
};

export {MovieGenre};