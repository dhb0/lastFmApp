import React, { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';
import InputField from './InputField';
import axios from 'axios';

function ArtistCardHolder() {

    const [data, setData] = useState([]);

    const fetchData = (query) => {
        axios
          .get("http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar",
            {
              params: {
                artist: query,
                limit: 10,
                api_key: 'f9ad13943c8b617e4b903d0f5bbf2041',
                format: 'json'
              }
            })
          .then(response => {
            setData(response.data.similarartists.artist);
          })
          .catch(error => console.log(error));
      }

    return (
        <>
         <InputField buttonClicked={fetchData} />
        <div className="datafield">
            {data.map(item=><ArtistCard bandName={item.name} image={item['image'][1]["#text"]} match={parseFloat(item.match)} url={item.url} />)}
        </div>
        </>
    )
}

export default ArtistCardHolder;