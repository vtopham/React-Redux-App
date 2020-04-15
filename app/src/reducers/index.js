import { NEW_PICTURE } from '../actions/newPicture.js'
import { FETCH_PICTURE_START, FETCH_PICTURE_FAIL, FETCH_PICTURE_SUCCESS } from '../actions/index.js'

const defaultState = {
    url: "",
    replacementText: "Press the button to see something foxy.",
    isFetching: false,
    error: ''
}

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case NEW_PICTURE: //when this action is dispatched, we want to replace the URL with the new URL from the payload
            return {
                ...state,
                url: action.payload
            }
        case FETCH_PICTURE_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_PICTURE_FAIL:
            return {
                ...state,
                url: "",
                isFetching: false
            }
        case FETCH_PICTURE_SUCCESS:
            return {
                ...state,
                url: action.payload,
                isFetching: false
            }
        default: 
            return state
    }
}