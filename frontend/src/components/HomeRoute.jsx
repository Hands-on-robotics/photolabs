import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ( { 
  photos,
  topics,
  filteredPhotos,
  filterPhotosBySearch,
  fetchPhotosByTopic,
  toggleFavourite,
  handleSelectPhoto,
  fetchAllPhotos,
  favPhotoIdsObject
} ) => {

  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={topics}
        favPhotoIdsObject={favPhotoIdsObject}
        fetchAllPhotos={fetchAllPhotos}
        fetchPhotosByTopic={fetchPhotosByTopic}
        filterPhotosBySearch={filterPhotosBySearch}
      />
      <PhotoList
        photos={photos}
        filteredPhotos={filteredPhotos}
        favPhotoIdsObject={favPhotoIdsObject}
        toggleFavourite={toggleFavourite}
        handleSelectPhoto={handleSelectPhoto}
      />
    </div>
  )
}

export default HomeRoute;
