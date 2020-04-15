import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import PictureHolder from './PictureHolder'
import NoPictureYet from './NoPictureYet'

import { newPicture } from '../actions/newPicture' //this is my test one
import { getPicture } from '../actions/index' //this is the real deal





const BigDiv = styled.div`



`

const mapStateToProps = state => {
    return {
        url: state.url
    }
}

//This holds everything for the page.
const FoxyPics = props => {

    const handleClick = event => {
        event.preventDefault()
        props.getPicture()
        // props.newPicture("https://images.unsplash.com/photo-1462953491269-9aff00919695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")
    }

    return (
        <BigDiv>
            <h1>Foxy pictures, get your foxy pictures here!</h1>
            <p>These days, foxy pictures are in high demand.</p>
            <p> Here, we're giving them away for free! Press the button to receive a foxy picture today!</p>
            {props.url === "" ? <NoPictureYet/> : <PictureHolder />}
            <button onClick = {handleClick}>New Picture, Please!</button>
        </BigDiv>
    )
}

export default connect(mapStateToProps, {newPicture, getPicture})(FoxyPics)
