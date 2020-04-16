import axios from 'axios'

export const FETCH_PICTURE_START = 'FETCH_PICTURE'
export const FETCH_PICTURE_SUCCESS = 'FETCH_PICTURE_SUCCESS'
export const FETCH_PICTURE_FAIL = 'FETCH_PICTURE_FAIL'

export const SAVE_FAVORITE = 'SAVE_FAVORITE'

export const getPicture = () => dispatch => {
    dispatch({type: FETCH_PICTURE_START})
    axios.get('https://randomfox.ca/floof/')
        .then(res => {
            console.log(res)
            dispatch({type: FETCH_PICTURE_SUCCESS, payload: res.data.image})
        })
        .catch(err => {
            dispatch({type: FETCH_PICTURE_FAIL})
        })
}

export const saveFavorite = (url) => {
    return {
        type: SAVE_FAVORITE,
        payload: url
    }
}
