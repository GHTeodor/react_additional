import React from 'react';

import '../Pages.css';


const CatPage = () => {
    const refreshPage = ()=>{
        window.location.reload();
    }

    return (
        <div className='page'>
            <div>
                <img src="https://loremflickr.com/480/560/cat" alt="Cat"/>
            </div>
            <button onClick={refreshPage}>new Cat</button>
        </div>
    );
};

export {CatPage};