import {CREATE_BOARD} from '../Types/Board-Types';



const initialState = {
    boardCurrent: [],
    boardLocations: []
}

export default function (state = initialState, action){
    switch(action.type){
        case CREATE_BOARD:
            return {
                ...state,
                boardCurrent: action.payload.newBoard,
                boardLocations: action.payload.locationBoard
            }
        default:
            return state;
    };
}