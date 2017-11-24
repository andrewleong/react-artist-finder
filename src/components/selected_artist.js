import React, { Component } from 'react';
import axios from 'axios';
import AlbumList from './album_list';

class SelectedArtist extends Component {
  constructor(props){
    super(props);
    this.state = { artist: '' }
  }
  componentDidMount(){
    axios.get(`http://localhost:3005/artists/${this.props.match.params.id}`)
    .then( (response) => {
       return this.setState({ artist: response.data })
    })
  }
  render(){
    console.log(this.state.artist);
    return (
      <div className="artist_bio">
        <div className="avatar">
          <span style = {{background: `url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`}}></span>
        </div>
        <div className="bio">
          <h3>{this.state.artist.name}</h3>
          <div className="bio_text">{this.state.artist.bio}</div>
        </div>
        <AlbumList listOfAlbum={this.state.artist.albums}/>
      </div>
    );
  }
}
export default SelectedArtist;
