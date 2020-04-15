import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        replacementText: state.replacementText
    }
}
const NoPictureYet = props => {
    return (
        <>
        <p>{props.replacementText}</p>
        </>
    )
}

export default connect(mapStateToProps, {})(NoPictureYet)