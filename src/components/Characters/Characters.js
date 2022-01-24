import React, {useState, useEffect} from 'react';

import {characters_Service} from "../../services/characters_Service";
import Character from "./Character";
import './Characters.css';


const Characters = ({character}) => {

    const [char, setChar] = useState([]);

    useEffect(() => {
        characters_Service.get1Char(character.split('/')[5]).then(value => setChar(value));
    }, []);

    return (
        <div>
            <Character key={char.id} character={char}/>
        </div>
    );
};

export default Characters;