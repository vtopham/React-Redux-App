import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const PicDiv = styled.div`
    img {
        width: 37.5%;
        margin: 2%;
    }

`


const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}

const Favorites = props => {

    return (
        <>
            {props.favorites.length > 0 ? <h3>Favorite Foxes</h3> : null}
            {props.favorites.map(favorite => {
                return(
                    <PicDiv className = "favorite">
                        <img src = {favorite} alt = "fox"/>
                    </PicDiv>
                )
            })}
        </>
    )
}

export default connect(mapStateToProps,{})(Favorites)