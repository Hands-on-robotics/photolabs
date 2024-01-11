import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ( { 
  photos,
  filteredPhotos,
  favPhotoIdsObject,
  handleSelectPhoto,
  toggleFavourite
  } ) => {

  const displayPhotos = filteredPhotos && filteredPhotos.length > 0 ? filteredPhotos : photos

  return (
    <ul className="photo-list">
      {displayPhotos && displayPhotos.map((photo) => {
        
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
