import React from 'react';

import '../Pages.css';


const NotebookPage = () => {
    const refreshPage = () => {
        window.location.reload();
    }


    return (
        <div className='page'>
            <div>
                <img src="https://loremflickr.com/480/560/notebook" alt="Notebook"/>
            </div>
            <button onClick={refreshPage}>new Notebook</button>
        </div>
    );
};

export {NotebookPage};