import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { saveFavorite } from '../actions/index'

const SaveButton = styled.button `
    height: 60px;
    width: 120px;
`

const mapStateToProps = state => {
    return {
        url: state.url
    }
}


const SaveFavorite = props => { //this is a button that will dispatch an action to add the current URL to the list of favorites
    
    const handleSave = event => {
        event.preventDefault()
        props.saveFavorite(props.url)

    }
    
    return (
        <SaveButton onClick = {handleSave}>Save This Fox!</SaveButton>
    )
}

export default connect(mapStateToProps, {saveFavorite})(SaveFavorite)