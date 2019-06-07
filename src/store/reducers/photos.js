import {SET_PHOTOS} from '../actions/actionTypes'

const initialState = {
    photos: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS:
            console.log('in reducer',action.photos);
            return {
                ...state,
                photos: action.photos
            };
        default:
            return state;
    }
};

export default reducer;