import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './Layout.css';


const Layout = () => {
    return (
        <>
            <header>
                <NavLink to={'/episodes'}>
                    Rick and Morty
                </NavLink>
            </header>
            <div className='layout'>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;