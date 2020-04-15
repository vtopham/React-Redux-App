import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import PictureHolder from './PictureHolder'
import NoPictureYet from './NoPictureYet'

import { newPicture } from '../actions/newPicture'

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
        props.newPicture("https://static1.squarespace.com/static/591d131d17bffc24f111e867/59769462e6f2e1dd13d28810/5cfaf0d7d316ce00010a677e/1559949875755/Loki_6.jpg?format=1500w")
    }

    console.log(props.url)
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

export default connect(mapStateToProps, {newPicture})(FoxyPics)