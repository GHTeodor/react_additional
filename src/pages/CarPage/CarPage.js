import React from 'react';

import '../Pages.css';


const CarPage = () => {
    const refreshPage = ()=>{
        window.location.reload();
    }

    return (
        <div className='page'>
            <div>
                <img src="https://loremflickr.com/480/560/car" alt="Car"/>
            </div>
            <button onClick={refreshPage}>new Car</button>
        </div>
    );
};

export {CarPage};