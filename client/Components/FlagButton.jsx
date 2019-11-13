import React from 'react';
import { connect } from 'react-redux'
import {flagTrue, flagFalse} from '../Redux/Actions/flagbutton'


const FlagButton = (props) =>{

    return (
        <button className="button is-size-3 is-medium has-background-gray-dark" id="flag" onClick={(event) => {
            if(props.flagState === false){
                props.flagTrue()
                event.target.classList.add("is-success")
            }else{
                props.flagFalse()
                event.target.classList.remove("is-success")
            }
        }}><span>🚩</span></button>
    )
}

const mapStateToProps = state => ({
    flagState: state.flag.state
})

const mapDispatchToProps = (dispatch) => ({
    flagTrue: () => dispatch(flagTrue()),
    flagFalse: () => dispatch(flagFalse())
})

export default connect(mapStateToProps, mapDispatchToProps)(FlagButton)