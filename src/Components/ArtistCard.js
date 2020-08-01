import React, { useEffect, useState} from 'react';
import axios from 'axios';
import uuid from 'uuid/v4'

function ArtistCard(props) {
	const { bandName, image, match, url} = props;
	const [topSongsClicked, setTopSongsClicked] = useState(false);
	const [topSongs, setTopSongs] = useState([]);
	const [bookmark, setBootmark] = useState(false);
	const bookmarkClicked = () => {
		setBootmark(!bookmark);
	}
	const bookmarkStyle = bookmark ? {color: '#faf75a'} : {color:'#ADD8E5' }
	const showTopSongs = () => {
		setTopSongsClicked(!topSongsClicked);
	}
    useEffect(()=>{
      axios
      .get("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks",
      {params:{
              artist: bandName,
              limit: 5,
              api_key: 'f9ad13943c8b617e4b903d0f5bbf2041',
              format: 'json'
  }},[])
  .then(response=>{
   setTopSongs(response.data.toptracks.track);console.log(topSongs)})
  .catch(error=>console.log(error));
  });
    return (
	<div className="ui card artist-card">
		<i class="fa fa-bookmark fa-2x" style={bookmarkStyle} aria-hidden="true" onClick={bookmarkClicked}></i>
        <div className="image">
		  <img src={image}/>
        </div>
        <div className="content">
          <a href={url} target="_blank" className="header">{ bandName }</a>
          <div className="description">
            <p>Match: { parseFloat(match*100).toFixed(0) } % </p>
		  </div>
		  <div className="topSongs">
			 <h4 onClick={showTopSongs}>Top Songs</h4>
			 <ul>
			 {
				 topSongsClicked ? topSongs.map((topSongs)=><li key={uuid()}>{topSongs.name}</li>)
				 : null
			 }
			 </ul>
		  </div>
        </div>

    </div>
    )
}

export default ArtistCard;
