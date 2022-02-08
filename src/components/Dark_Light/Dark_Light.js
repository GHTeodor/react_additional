import React from 'react';
import {useDispatch} from "react-redux";

import {darkThemeThunk} from "../../store/movies.slice";


const DarkLight = ({darkMode}) => {
//☀︎ ☽
    const dispatch = useDispatch();

    return (
        <div className="container">
            <span style={{color: darkMode ? "grey" : "yellow"}}>☀︎</span>
            <div className="switch-checkbox">
                <label className="switch">
                    <input type="checkbox" onChange={() => dispatch(darkThemeThunk(!darkMode))}/>
                    <span className="slider round"> </span>
                </label>
            </div>
            <span style={{color: darkMode ? "#c96dfd" : "grey"}}>☽</span>
        </div>
    );
};

export {DarkLight};