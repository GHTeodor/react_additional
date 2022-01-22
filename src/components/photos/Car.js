import React, {useEffect, useState} from "react";

import {car_Service} from "../../services/car_Service";


const Car = () => {
    const [imgUrl, setImgUrl] = useState();

    const getImg = async () => {
        const response = await car_Service.get1();
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
            <img src={imgUrl} alt="Car"/>
            <button onClick={getImg}>new Car</button>
        </div>
    );
};

export default Car;