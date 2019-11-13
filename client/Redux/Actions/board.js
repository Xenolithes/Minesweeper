import {CREATE_BOARD} from '../Types/Board-Types';
import Board from '../../Game-Logic/Create-Board';


export function createBoard () {
    let newBoard = Board.generateMinesweeperBoard();
    let locationBoard = Board.generateLocationBoard();
    return function (dispatch){
        return dispatch({
            type: CREATE_BOARD,
            payload: {
                newBoard : newBoard,
                locationBoard : locationBoard
            }
        })
    }


}