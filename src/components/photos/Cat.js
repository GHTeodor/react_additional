import React, {useEffect, useState} from "react";

import {cat_Service} from "../../services/cat_Service";


const Cat = () => {
    const [imgUrl, setImgUrl] = useState();

    const getImg = async () => {
        const response = await cat_Service.get1();
        const reader = new FileReader();
        reader.readAsDataURL(response.data);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImgUrl(base64data);
        };
    };

    useEffect(() => {
        getImg();
    }, []);

    return (
        <div>
            <img src={imgUrl} alt="Cat"/>
            <button onClick={getImg}>Update Cat</button>
        </div>
    );
};

export default Cat;