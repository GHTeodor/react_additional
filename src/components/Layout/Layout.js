import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import './Layout.css';
import '../Dark_Light/Dark-Light.css';
import {DarkLight} from "../Dark_Light/Dark_Light";


const Layout = () => {
    const {darkMode} = useSelector(state => state["moviesReducer"]);

    return (
        <>
            <header>
                <NavLink to={"/movies"}>Movies</NavLink>
                <NavLink to={"/genres"}>Genres</NavLink>
                <DarkLight darkMode={darkMode}/>
            </header>
            <div id="content" className={darkMode ? "dark-mode" : "light-mode"}>
                <Outlet/>
                <footer>
                    🅃🄷🄴 – 🄼❄🅅🄸🄴 — 🄳🄱
                </footer>
            </div>
        </>
    );
};

export {Layout};