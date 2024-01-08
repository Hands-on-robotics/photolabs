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
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC',
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
    case ACTIONS.GET_PHOTOS_BY_TOPIC:
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
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_TOPIC_DATA', payload: data})
      })

    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => { 
        dispatch({ type: 'SET_PHOTO_DATA', payload: data });
      })

  }, []);

  const fetchAllPhotos = () => {
    fetch('http://localhost:8001/api/photos')
    .then(res => res.json())
    .then(data => { 
      dispatch({ type: 'SET_PHOTO_DATA', payload: data });
    })
  }

  const fetchPhotosByTopic = (topicID) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicID}`)
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'GET_PHOTOS_BY_TOPIC', payload: data });
    })
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
    state,
    toggleFavourite,
    handleSelectPhoto,
    handleClosePhoto,
    fetchPhotosByTopic,
    fetchAllPhotos
  };
};

export default useApplicationData;
