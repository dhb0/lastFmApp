import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtistCard from './ArtistCard'

function GetData({ searchKey }) {
    const[data, setData] = useState([]);
    useEffect(()=>{
        axios
        .get("http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar",
        {params:{
                artist: searchKey,
                limit: 10,
                api_key: 'f9ad13943c8b617e4b903d0f5bbf2041',
                format: 'json'
    }},[])
    .then(response=>{
    setData(response.data.similarartists.artist); console.log(data)})
    .catch(error=>console.log(error));
    });

    return (
        <div className="datafield">
            {data.map(item=><ArtistCard bandName={item.name} image={item['image'][1]["#text"]} match={parseFloat(item.match)} />)}
        </div>
    )
}

export default GetData;
