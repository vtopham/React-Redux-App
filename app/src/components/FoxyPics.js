import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import PictureHolder from './PictureHolder'
import NoPictureYet from './NoPictureYet'
import Favorites from './Favorites'

import { newPicture } from '../actions/newPicture' //this is my test one
import { getPicture } from '../actions/index' //this is the real deal




const BigDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        background: peachpuff;
        padding: 2%;
    }

    .body {
        width: 75%;
        

        p {
            font-style: italic;
            margin: 4% 0;
            
        }

        button {
            height: 60px;
            width: 150px;
            margin: 2%;
            background: #6495ed;
            border-radius: 10px;
            color: white;
            font-size: 16px;

            &:hover {
                background: white;
                border: 1px solid #6495ed;
                color: #6495ed;
            }
            
        }
    }

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
            <div className = "body">
                <p>These days, foxy pictures are in high demand. Here, we're giving them away for free! Press the button to receive a foxy picture today!</p>
                {props.url === "" ? <NoPictureYet/> : <PictureHolder />}
                <button onClick = {handleClick}>New Picture, Please!</button>
                <Favorites/>
            </div>
        </BigDiv>
    )
}

export default connect(mapStateToProps, {newPicture, getPicture})(FoxyPics)
