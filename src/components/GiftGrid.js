import React, { useState } from 'react'

export const GiftGrid = ({ category }) => {

    const [count, setCount] = useState(0);

    const getGifts = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=React&limit=10&api_key=Au0iJ96jRYhTJo4fvLUAgf9YUvWTgONd';
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                ur: img.images?.downsized_medium.url
            }
        });
        console.log(gifs);
    }

    getGifts();

    return (
        <>
            <h3>{category}</h3>
            <button onClick={() => { setCount(count + 1) }}></button>
        </>
    )
}
