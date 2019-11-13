import React from 'react';
import { connect } from 'react-redux';
import {createBoard} from '../Redux/Actions/board';
import Board from '../Game-Logic/Create-Board';


const Gameover = (props) => {
    return (
        <div className="modal" id="game-over">
            <div className="modal-background" onClick={event => {
                document.getElementById('game-over').style.display = 'none';
                Board.resetBoard(props.locations)
                props.createBoard();
            }}></div>
            <div className="modal-content has-text-centered has-background-grey">
                <h1 className="title has-text-danger">Game-Over</h1>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={event => {
                document.getElementById('game-over').style.display = 'none';
                Board.resetBoard(props.locations)
                props.createBoard();
            }}></button>
        </div>
    )
}

const mapStateToProps = state => ({
    locations: state.board.boardLocations
})

const mapDispatchToProps = (dispatch) => ({
    createBoard: () => dispatch(createBoard())
})

export default connect(mapStateToProps, mapDispatchToProps)(Gameover)