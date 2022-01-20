import React from 'react';

import '../Pages.css';


const GirlPage = () => {
    const refreshPage = () => {
        window.location.reload();
    }


    return (
        <div className='page'>
            <div>
                <img src="https://loremflickr.com/480/560/girl" alt="Girl"/>
            </div>
            <button onClick={refreshPage}>new Girl</button>
        </div>
    );
};

export {GirlPage};