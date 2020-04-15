import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'


const NoURL = styled.p`
    height: 300px;
    width: 300px;
    text-align: center;
    margin: 2% auto;
    background: peachpuff;
    display: flex;
    align-items: center;
    
    p {
        color: white;
        font-size: 24px;
    }

`
const mapStateToProps = state => {
    return {
        replacementText: state.replacementText
    }
}

const NoPictureYet = props => { //This will appear if there isn't a URL yet to show.
    return (
        <>
        <NoURL>
            <p>{props.replacementText}</p>
        </NoURL>
        </>
    )
}

export default connect(mapStateToProps, {})(NoPictureYet)