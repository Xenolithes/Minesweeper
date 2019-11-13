import {INCREMENT, RESET} from '../Types/Bomb-Counter'

export function incrementCounter (currentCount) {
    return function (dispatch) {
        let updatedCount = currentCount + 1;
        return dispatch({
            type: INCREMENT,
            payload: updatedCount
        })
    }
}

export function resetCounter () {
    return function(dispatch){
        return dispatch({
            type: RESET,
            payload: 0
        })
    }
}


