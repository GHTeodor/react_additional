import React, {useEffect, useState} from "react";
import {notebook_Service} from "../../services/notebook_Service";


const Notebook = () => {
    const [imgUrl, setImgUrl] = useState();

    const getImg = async () => {
        const response = await notebook_Service.get1();
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
            <img src={imgUrl} alt="Notebook"/>
            <button onClick={getImg}>new Notebook</button>
        </div>
    );
};

export default Notebook;