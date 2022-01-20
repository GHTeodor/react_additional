import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './Layout.css';


const Layout = () => {

    return (
        <div className='layout'>
            <div className='nav_Layout'>
                <NavLink to={'/car'}><button>Car</button></NavLink>
                <NavLink to={'/cat'}><button>Cat</button></NavLink>
                <NavLink to={'/dog'}><button>Dog</button></NavLink>
                <NavLink to={'/girl'}><button>Girl</button></NavLink>
                <NavLink to={'/notebook'}><button>Notebook</button></NavLink>
            </div>
            <div className='content'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;