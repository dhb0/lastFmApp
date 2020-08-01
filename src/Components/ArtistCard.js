import React from 'react';

function ArtistCard(props) {
    const { bandName, image, match} = props;
    return (
    <div className="ui card artist-card">
        <div className="image">
          <img src={image}/>
        </div>
        <div className="content">
          <a className="header">{ bandName }</a>
          <div className="description">
            Match: % { parseFloat(match*100).toFixed(0) }
          </div>
        </div>

    </div>
    )
}

export default ArtistCard;
