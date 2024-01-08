import React from 'react';
import FavBadge from './FavBadge';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ 
  photoId, 
  selected, 
  toggleFavourite 
}) {

  const handleFavIconClick = () => {
    toggleFavourite(photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleFavIconClick}>
      <div className="photo-list__fav-icon-svg">
        <FavBadge selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
