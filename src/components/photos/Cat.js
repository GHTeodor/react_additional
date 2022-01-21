import React, { useEffect, useState } from "react";


const Cat = () => {
    const [imgUrl, setImgUrl] = useState();

    const getImg = async () => {
        const response = await fetch('https://loremflickr.com/480/560/cat');
        const imageBlob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(imageBlob);
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
            <img src={imgUrl} alt="Cat" />
            <button onClick={getImg}>Update Cat</button>
        </div>
    );
};

export default Cat;