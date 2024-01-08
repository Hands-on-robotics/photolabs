import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ( { 
  photos,
  favPhotoIdsObject,
  handleSelectPhoto,
  toggleFavourite
  } ) => {

  return (
    <ul className="photo-list">
      {photos && photos.map((photo) => {
        
        return (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            favPhotoIdsObject={favPhotoIdsObject}
            toggleFavourite={toggleFavourite}
            handleSelectPhoto={handleSelectPhoto}
          />
          )
        })
      }
    </ul>
  );
};

export default PhotoList;
