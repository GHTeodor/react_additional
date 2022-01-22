import React, {useEffect, useState} from "react";

import {dog_Service} from "../../services/dog_Service";


const Dog = () => {
    const [imgUrl, setImgUrl] = useState();

    const getImg = async () => {
        const response = await dog_Service.get1();
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
            <img src={imgUrl} alt="Dog"/>
            <button onClick={getImg}>new Dog</button>
        </div>
    );
};

export default Dog;