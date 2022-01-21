import React, { useEffect, useState } from "react";


const Girl = () => {
    const [imgUrl, setImgUrl] = useState();

    const getImg = async () => {
        const response = await fetch('https://loremflickr.com/480/560/girl');
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
            <img src={imgUrl} alt="Girl" />
            <button onClick={getImg}>new Girl</button>
        </div>
    );
};

export default Girl;