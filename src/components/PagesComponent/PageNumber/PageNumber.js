import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {buttonPageThunk} from "../../../store/movies.slice";
import '../../components.css';


const PageNumber = ({arr, page}) => {
    const dispatch = useDispatch();
    const {darkMode} = useSelector(state => state["moviesReducer"]);

    return (
        <button onClick={() => dispatch(buttonPageThunk(arr))}
                className={arr === page ? "currentPageNumber" : "notCurrentPageNumber"}
                id={darkMode ? "darkButton" : ""}>
            {arr}
        </button>
    );
};

export {PageNumber};