import { NEW_PICTURE } from '../actions/newPicture.js'

const defaultState = {
    url: "",
    replacementText: "Press the button to see something foxy!"
}

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case (NEW_PICTURE): //when this action is dispatched, we want to replace the URL with the new URL from the payload
            return state
        default: 
            return state
    }
}