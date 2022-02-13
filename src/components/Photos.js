import React, {useEffect, useState} from 'react';

import './Pages.css';
import {urls} from "../urls/urls";
import {photo_Service} from "../services/photo_Service";


const Photos = () => {
    const [imgUrl, setImgUrl] = useState();
    const [imgUrls, setImgUrls] = useState({url: urls.car, name: "Car"});

    const images = (topic = imgUrls.url) => photo_Service.get1(topic).then(img => setImgUrl(img));

    useEffect(() => images(), [imgUrls]);

    return (
        <div>
            <div className="buttons">
                <button onClick={() => setImgUrls({url: urls.car, name: "Car"})}><b>Car</b></button>
                <button onClick={() => setImgUrls({url: urls.cat, name: "Cat"})}><b>Cat</b></button>
                <button onClick={() => setImgUrls({url: urls.dog, name: "Dog"})}><b>Dog</b></button>
                <button onClick={() => setImgUrls({url: urls.girl, name: "Girl"})}><b>Girl</b></button>
                <button onClick={() => setImgUrls({url: urls.notebook, name: "Notebook"})}><b>Notebook</b></button>
            </div>

            <div style={{display: "block"}}>
                <img src={imgUrl} alt={imgUrls.name}/>
                <button style={{width: "480px"}} onClick={() => images()}>new <u>{imgUrls.name}</u></button>
            </div>
        </div>
    );
};

export default Photos;