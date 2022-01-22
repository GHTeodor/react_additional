import React, {useEffect, useState} from "react";

import {girl_Service} from "../../services/girl_Service";


const Girl = () => {
    const [imgUrl, setImgUrl] = useState();

    const getImg = async () => {
        const response = await girl_Service.get1();
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
            <img src={imgUrl} alt="Girl"/>
            <button onClick={getImg}>new Girl</button>
        </div>
    );
};

export default Girl;