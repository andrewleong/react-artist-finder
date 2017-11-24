import React , { Component } from 'react';
import { Link } from 'react-router-dom';

class ArtistList extends Component {
  render(){
    const artists = ({ listOfArtist }) => {
      if(listOfArtist){
        return listOfArtist.map( (artist) => {

          return (
            <Link key={artist.id} to={`/selected_artist/${artist.id}`} className="artist_item" style={{ background:`url('/images/covers/${artist.cover}.jpg') no-repeat`}}>
              <div>{artist.name}</div>
                <div>{artist.cover}</div>
            </Link>
          )
        });
      }
    }
    return (
      <div className="artists_list">
           <h4>Browse the artists</h4>
           {artists(this.props)}
      </div>
    );
  }
}

export default ArtistList;
