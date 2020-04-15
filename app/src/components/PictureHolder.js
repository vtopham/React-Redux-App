import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'


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
        <>
        <div>
            <FoxPic src = {props.url} alt = "fox"/>
        </div>
        </>
    )
}

export default connect(mapStateToProps, {})(PictureHolder)