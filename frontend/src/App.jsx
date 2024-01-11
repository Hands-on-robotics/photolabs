import React from 'react';

import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  const { 
    state: {
      photoData,
      filteredPhotos,
      topicData,
      selectedPhotoId,
      favPhotoIdsObject,
    },
    fetchAllPhotos,
    fetchPhotosByTopic,
    filterPhotosBySearch,
    toggleFavourite,
    handleSelectPhoto,
    handleClosePhoto,
  } = useApplicationData();

  return (
  <div className="App">
    <HomeRoute
      photos={photoData}
      topics={topicData}
      filteredPhotos={filteredPhotos}
      fetchAllPhotos={fetchAllPhotos}
      fetchPhotosByTopic={fetchPhotosByTopic}
      filterPhotosBySearch={filterPhotosBySearch}
      favPhotoIdsObject={favPhotoIdsObject} 
      toggleFavourite={toggleFavourite}
      handleSelectPhoto={handleSelectPhoto}

    />
    {selectedPhotoId && 
    <PhotoDetailsModal 
      photoId={selectedPhotoId}
      photos={photoData}
      favPhotoIdsObject={favPhotoIdsObject}
      toggleFavourite={toggleFavourite}
      handleSelectPhoto={handleSelectPhoto}
      handleClosePhoto={handleClosePhoto}
    />}
  </div>
  )
};

export default App;
