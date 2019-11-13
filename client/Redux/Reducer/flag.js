import {FLAG_TRUE, FLAG_FALSE} from '../Types/Flag-Button';

const initialState = {
    state: false
}

export default function (state = initialState, action){
    switch(action.type){
        case FLAG_TRUE:
            return {
                ...state,
                state: action.payload
            }
        case FLAG_FALSE:
            return {
                ...state,
                state: action.payload
            }
        default: 
            return state;
    };
}