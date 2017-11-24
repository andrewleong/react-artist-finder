import React, { Component } from 'react';

class AlbumList extends Component {
  render(){
    console.log(this.props.listOfAlbum);
    const albums = ({listOfAlbum}) => {
      if(listOfAlbum){
        return listOfAlbum.map( (response, index) => {
          return (
            <img key={index} src={`/images/albums/${response.cover}.jpg`} />

          )
        })
      }
    }
    return (
      <div className="albums_list">
        {albums(this.props)}
      </div>
    )
  }
}
export default AlbumList;
