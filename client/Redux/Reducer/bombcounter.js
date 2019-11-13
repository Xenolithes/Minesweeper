import {INCREMENT, RESET} from '../Types/Bomb-Counter'

const initialState = {
    current: 0
}

export default function (state = initialState, action){
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                current: action.payload
            }
        case RESET:
            return {
                ...state,
                current: action.payload
            }
        default:
            return state;
    }
}