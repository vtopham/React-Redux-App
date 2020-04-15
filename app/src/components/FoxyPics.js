import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import PictureHolder from './PictureHolder'
import NoPictureYet from './NoPictureYet'

const BigDiv = styled.div`



`

const mapStateToProps = state => {
    return {
        url: state.url
    }
}

//This holds everything for the page.
const FoxyPics = props => {

    console.log(props.url)
    return (
        <BigDiv>
            <h1>Foxy pictures, get your foxy pictures here!</h1>
            <p>These days, foxy pictures are in high demand.</p>
            <p> Here, we're giving them away for free! Press the button to receive a foxy picture today!</p>
            {props.url === "" ? <NoPictureYet/> : <PictureHolder />}
            <button>New Picture, Please!</button>
        </BigDiv>
    )
}

export default connect(mapStateToProps, {})(FoxyPics)