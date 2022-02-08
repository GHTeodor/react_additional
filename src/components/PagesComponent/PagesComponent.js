import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {changePageThunk} from "../../store/movies.slice";
import {PageNumber} from "./PageNumber/PageNumber";


const PagesComponent = ({page}) => {
    const dispatch = useDispatch();
    const {darkMode} = useSelector(state => state["moviesReducer"]);

    let array = [];

    let min = page;
    let max = page;

    if (page.toString().length === 1) {
        min = 1;
        max = 10;
    } else {
        for (let i = 0; i < 9; i++) {
            if (min % 10 !== 0) min--;
            if (max % 10 !== 0) max++;
        }
    }
    if (min === max && max === 500) min = max - 10;
    if (min === max) max = min + 10;

    for (let i = min; i <= max; i++) {
        array.push(i);
    }

    return (
        <div className="pagesComponent">
            <button onClick={() => dispatch(changePageThunk(-1))} id={darkMode ? "darkButton" : ""}
                    className={"notCurrentPageNumber"}>«
            </button>
            {array.map(arr =>
                <PageNumber key={arr} arr={arr} page={page}/>)}
            <button onClick={() => dispatch(changePageThunk(1))} id={darkMode ? "darkButton" : ""}
                    className={"notCurrentPageNumber"}>»
            </button>
        </div>
    );
};

export {PagesComponent};