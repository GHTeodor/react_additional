import React from 'react';

import '../Pages.css';


const DogPage = () => {
    const refreshPage = () => {
        window.location.reload();
    }


    return (
        <div className='page'>
            <div>
                <img src="https://loremflickr.com/480/560/dog" alt="Dog"/>
            </div>
            <button onClick={refreshPage}>new Dog</button>
        </div>
    );
};

export {DogPage};