import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/PhotoDetailsModal.scss'

const PhotoDetailsModal = (
  { 
    photos,
    photoId,
    favPhotoIdsObject,
    toggleFavourite,
    handleSelectPhoto,
    handleClosePhoto
  }) => {

  const photo = photos.find(p => p.id === photoId);
  const selected = favPhotoIdsObject.includes(photo.id);
  const similar_photos = photo.similar_photos;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClosePhoto}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-list__item">
      <PhotoFavButton 
        photoId={photo.id}
        selected={selected}
        toggleFavourite={toggleFavourite}
      />
      <img className="photo-details-modal__image" src={photo.urls.full}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt="User profile" />
        <div>
          <div className="photo-list__user-info"> {photo.user.name} </div>
          <div  className="photo-list__user-info photo-list__user-location">
            {photo.location.city},
            {photo.location.country}
          </div>
        </div>
      </div>
    </div>

      <PhotoList className="photo-details-modal__images"
        photos={similar_photos}
        favPhotoIdsObject={favPhotoIdsObject}
        handleSelectPhoto={handleSelectPhoto}
        toggleFavourite={toggleFavourite}
      />
    </div>
  )
};

export default PhotoDetailsModal;
