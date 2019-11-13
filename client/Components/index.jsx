import React from 'react';
import { connect } from 'react-redux';
import {createBoard} from '../Redux/Actions/board';
import Minefield from '../Components/Minefield.jsx';
import SubHeader from './SubHeader.jsx'


class Index extends React.Component {

    componentDidMount () {
        this.props.createBoard();
    }

    createBoard(){
        if(this.props.locations === undefined){
            return 
        }else if(this.props.locations){
            return this.props.locations.map(rows =>
                {
                    return rows.map(item => {
                        let location = item.split('')
                        return <Minefield key={item} id={item} value={this.props.board[parseInt(location[0])][parseInt(location[1])]}/>
                    })
                })
        }

    }

    render(){
        return (
            <React.Fragment>
                <h1 className="subtitle">Begin Here</h1>
                <SubHeader />
                <div className= "container has-text-centered has-background-grey">
                <div className ='container' id="game-board">
                    {this.createBoard()}
                </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    board: state.board.boardCurrent,
    locations: state.board.boardLocations
})

const mapDispatchToProps = (dispatch) => ({
    createBoard: () => dispatch(createBoard())
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);