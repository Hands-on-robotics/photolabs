import { useReducer, useEffect } from "react";

const initialState = { 
  topicData: [],
  photoData: [],
  selectedPhotoId: null,
  favPhotoIdsObject: [],
};

// ACTION table helps to scale app by preventing typos across a larger code base.
export const ACTIONS = {
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_PHOTO_DISPLAY: 'SET_PHOTO_DISPLAY',
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC',
  GET_PHOTOS_BY_SEARCH: 'GET_PHOTOS_BY_SEARCH',
  SELECT_PHOTO: 'SELECT_PHOTO',
  FAV_PHOTO_ADD: 'FAV_PHOTO_ADD',
  FAV_PHOTO_REMOVE: 'FAV_PHOTO_REMOVE',
};

// Reducer is used minimize lines of code to manage state.
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_PHOTO_DISPLAY: // TODO: UPDATE photoData
      return { ...state, photoData: action.payload };
    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return { ...state, photoData: action.payload };
    case ACTIONS.GET_PHOTOS_BY_SEARCH: // SearchBar
      console.log('file name useApplicationData.js: updated photoData', state.photoData);
      return { ...state, photoData: action.payload };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhotoId: action.selectedPhotoId };
    case ACTIONS.FAV_PHOTO_ADD:
      return { ...state, favPhotoIdsObject: [...state.favPhotoIdsObject, action.photoId] };
    case ACTIONS.FAV_PHOTO_REMOVE:
      return { ...state, favPhotoIdsObject: state.favPhotoIdsObject.filter(item => item !== action.photoId) };
    default:
      return state;
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_TOPIC_DATA', payload: data})
      })

    fetch('/api/photos')
      .then(res => res.json())
      .then(data => { 
        dispatch({ type: 'SET_PHOTO_DATA', payload: data });
      })

  }, []);

  const fetchAllPhotos = () => {
    fetch('/api/photos')
    .then(res => res.json())
    .then(data => { 
      dispatch({ type: 'SET_PHOTO_DATA', payload: data });
    }) 
  }

  const fetchPhotosByTopic = (topicID) => {
    fetch(`/api/topics/photos/${topicID}`)
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'GET_PHOTOS_BY_TOPIC', payload: data });
    })
  };

  // SearchBar API: test username 'sitad'
  const filterPhotosBySearch = (searchText) => {
    fetch(`/api/search-photos?searchText=${searchText}`)
      .then(res => res.json())
      .then(data => {
        console.log('file name useApplicationData.js: Yay data received here!', data);
        
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_SEARCH, payload: data });
      });
  };
  
  const handleSelectPhoto = (photoId) => dispatch({ type: ACTIONS.SELECT_PHOTO, selectedPhotoId: photoId });
  
  const handleClosePhoto = () => dispatch({ type: ACTIONS.SELECT_PHOTO, selectedPhotoId: null });
  
  const toggleFavourite = (photoId) => {

    if (state.favPhotoIdsObject.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVE, photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADD, photoId });
    }
  };

  return {
    // one state object
    state,
    // handlers
    toggleFavourite,
    handleSelectPhoto,
    handleClosePhoto,
    fetchAllPhotos,
    fetchPhotosByTopic,
    filterPhotosBySearch, // props for photos if (photoData) photoData.map else photos.map
  };
};

export default useApplicationData;
