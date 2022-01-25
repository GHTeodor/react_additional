import React, {useEffect, useState} from 'react';

import Episodes from "../../components/Episodes/Episodes";
import './EpisodePage.css';
import baseURL, {urls} from "../../configs/urls";
import {axiosService} from "../../services/axiosService";


const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [episodesPageInfo, setEpisodesInfo] = useState({});
    let [page, setPage] = useState(1);
    let [num, setNum] = useState(baseURL + urls.episodes);

    useEffect(() => {
        axiosService.get(num).then(value => {
            setEpisodes(value.results);
            setEpisodesInfo(value.info);

            if (num.indexOf("=") >= 0)
                setPage(num.split("=").pop());
            else
                setPage(1);
        });
    }, [num, page]);

    const nextPage = () => {
        if (episodesPageInfo.next)
            setNum(episodesPageInfo.next);
        else if (episodesPageInfo.next === null)
            setNum(baseURL + urls.episodes);
    };

    const prevPage = () => {
        if (episodesPageInfo.prev)
            setNum(episodesPageInfo.prev);
        else if (episodesPageInfo.prev === null)
            setNum(`${baseURL}${urls.episodes}?page=${episodesPageInfo.pages}`)
    };

    return (
        <>
            <div className='episodesPage'>
                {episodes.map(episode =>
                    <Episodes key={episode.id} episode={episode}/>)}
            </div>
            <div className='buttons'>
                <button onClick={prevPage}>prev</button>
                >{page}&lt;
                <button onClick={nextPage}>next</button>
            </div>
        </>
    );
};

export {EpisodesPage};