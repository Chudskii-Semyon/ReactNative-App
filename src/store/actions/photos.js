import {SET_PHOTOS} from "./actionTypes";

export const getPhotos = () => {
    return dispatch => {
        fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
            .catch(err => console.log('error',err))
            .then(res => res.json())
            .then(parsedRes => {
                dispatch(setPhotos(parsedRes))
            })
    }
};

export const setPhotos = photos => {
    return {
        type: SET_PHOTOS,
        photos: photos
    }
};