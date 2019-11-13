import React from 'react';
import Board from '../Game-Logic/Create-Board.js'
import { connect } from 'react-redux'
import {flagFalse} from '../Redux/Actions/flagbutton'
import {incrementCounter, resetCounter} from '../Redux/Actions/bombcount'

const Minefield = (props) => {
    return (
        <button className="is-size-3 has-background-gray-dark" id={props.id} value={props.value} onClick={event => {
            let target = document.getElementById(event.target.id)
            if(props.flagState === false){
                if(typeof props.value === 'number'){
                    target.innerHTML = props.value
                }else{
                    target.innerHTML = "<span>&#128163;</span>"
                    document.getElementById('game-over').style.display = 'block';
                    //End Game
                }

                if(props.value === 0){
                    target.classList.add('has-text-link');
                    let location = props.id.split('')
                    let row = parseInt(location[0])
                    let column = parseInt(location[1])
                    Board.revealOtherLocations(row, column)
                    //Reveal Other Blocks
                }
                else if(props.value === 1)target.classList.add('has-text-info');
                else if(props.value === 2)target.classList.add('has-text-success');
                else if(props.value >= 3 )target.classList.add('has-text-danger');
            }else{
                if(typeof props.value === 'number'){
                    document.getElementById('game-over').style.display = 'block';
                    document.getElementById('flag').classList.remove('is-success')
                    props.flagFalse()
                    props.resetCounter()
                }else{
                    target.innerHTML = "<span>🚩</span>"
                    document.getElementById('flag').classList.remove('is-success')
                    props.incrementCounter(props.currentCount)
                    props.flagFalse()
                    if(props.currentCount + 1 > 9){
                        document.getElementById('game-win').style.display = 'block';
                        props.resetCounter()
                    }
                }

            }
        }}></button>
    )
}

const mapStateToProps = state => ({
    flagState: state.flag.state,
    currentCount: state.count.current
})

const mapDispatchToProps = (dispatch) => ({
    flagFalse: () => dispatch(flagFalse()),
    incrementCounter: (current) => dispatch(incrementCounter(current)),
    resetCounter: () => dispatch(resetCounter())
})

export default connect(mapStateToProps, mapDispatchToProps)(Minefield)