export const NEW_PICTURE = "NEW_PICTURE"

//this will take the new picture URL as returned by the axios request and return it as the payload, as a test
export const newPicture = pictureURL => {
    return {
        type: NEW_PICTURE,
        payload: pictureURL
    }
}