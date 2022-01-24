import React, {useEffect, useState} from 'react';

import Episodes from "../../components/Episodes/Episodes";
import {episodes_Service} from "../../services/episodes_Service";
import './EpisodePage.css';


const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    let [num, setNum] = useState(1);
    useEffect(() => {
        episodes_Service.getPage(num).then(value => setEpisodes(value.results));
    }, [num]);

    const increment = () => {
        if (num + 1 > 3) {
            setNum(num = 0);
        }
        setNum(++num);
    };
    const decrement = () => {
        if (num - 1 < 1) {
            setNum(num = 4);
        }
        setNum(--num);
    };

    return (
        <>
            <div className='episodesPage'>
                {episodes.map(episode =>
                    <Episodes key={episode.id} episode={episode}/>)}
            </div>
            <div className='buttons'>
                <button onClick={decrement}>prev</button>
                <button onClick={increment}>next</button>
            </div>
        </>
    );
};

export {EpisodesPage};