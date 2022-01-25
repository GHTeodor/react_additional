import React, {useState, useEffect} from 'react';

import Character from "./Character";
import './Characters.css';
import {axiosService} from "../../services/axiosService";


const Characters = ({characters}) => {

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axiosService.get(characters).then(value => setCharacter(value));
    }, []);

    return (
        <div>
            <Character key={character.id} character={character}/>
        </div>
    );
};

export default Characters;