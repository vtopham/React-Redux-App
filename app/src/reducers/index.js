import { NEW_PICTURE } from '../actions/newPicture.js'

const defaultState = {
    url: ""
}

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case (NEW_PICTURE): 
            return state
        default: 
            return state
    }
}