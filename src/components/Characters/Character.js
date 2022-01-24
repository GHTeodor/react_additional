import React from 'react';

const Character = ({character: {name, status, species, image}}) => {
    return (
        <div className='character'>
            <b>{name}</b>
            <br/><small>{status}</small>
            <br/><u>Species</u>: <i>{species}</i>
            <br/><img src={image} alt={name}/>
        </div>
    );
};

export default Character;