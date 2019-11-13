import React from 'react';
import { connect } from 'react-redux'

const BombCounter = (props) => {
    return (
        <div className="subtitle">{props.counter}</div>
    )
}

const mapStateToProps = state => ({
    counter: state.count.current
})

export default connect(mapStateToProps, null)(BombCounter)