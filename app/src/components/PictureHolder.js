import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import SaveFavorite from './SaveFavorite'


const FoxPic = styled.img `
    width: 50%;
`
//This will just hold the foxy picture, pulling the URL from state.

const mapStateToProps = state => {
    return {
        url: state.url
    }
}
const PictureHolder = props => {
    return (
        <div className = "pictureholder">
            <div>
                <FoxPic src = {props.url} alt = "fox"/>
            </div>
            <SaveFavorite />
        </div>
    )
}

export default connect(mapStateToProps, {})(PictureHolder)