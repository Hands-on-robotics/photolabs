import React from 'react';
import TopicList from './TopicList';
import FavIcon from './FavIcon';
import '../styles/TopNavigationBar.scss'

const TopNavigationBar = ( {
  topics,
  favPhotoIdsObject,
  fetchPhotosByTopic,
  fetchAllPhotos
  } ) => {

  const favouriteCounter = favPhotoIdsObject.length > 0 ? favPhotoIdsObject.length : null;

  const displayAlert = favPhotoIdsObject.length ? true : false;
  
  const showAllPhotos = (e) => {
    e.preventDefault();
    fetchAllPhotos();
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={showAllPhotos}>PhotoLabs</span>
      <TopicList
        topics={topics}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <h3>
        <FavIcon 
          displayAlert={displayAlert}
          selected={true} 
        />
        {favouriteCounter}
      </h3>
    </div>
  )
}

export default TopNavigationBar;
