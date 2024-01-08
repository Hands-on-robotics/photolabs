import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ( { 
  photo, 
  favPhotoIdsObject, 
  toggleFavourite, 
  handleSelectPhoto
  } ) => {

  const selected = favPhotoIdsObject.includes(photo.id);

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        photoId={photo.id}
        selected={selected}
        toggleFavourite={toggleFavourite}
      />
      <img className="photo-list__image" 
        alt="User's posted image"
        src={photo.urls.regular}
        onClick={() => handleSelectPhoto(photo.id)}
      />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile"
          alt="User profile"
          src={photo.user.profile}
        />
        <div>
          <div className="photo-list__user-info">
            {photo.user.name}
          </div>
          <div  className="photo-list__user-info photo-list__user-location">
            {photo.location.city},{photo.location.country}
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
