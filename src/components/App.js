import React, { Component } from 'react';
import Header from './header';
import ArtistList from './artist-list';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { artist: '' }
  }

  componentDidMount() {
     axios.get(`http://localhost:3005/artists`)
    .then( (response) => {
      return this.setState( { artist: response.data });
    })
  }

  render(){
    return(
      <div>
        <Header />
        <ArtistList listOfArtist={this.state.artist} />
      </div>
    )
  }
}

export default App;
