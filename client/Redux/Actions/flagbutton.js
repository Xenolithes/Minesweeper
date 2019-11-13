import {FLAG_TRUE, FLAG_FALSE} from '../Types/Flag-Button';

export function flagTrue () {
    return function (dispatch) {
        return dispatch({
            type: FLAG_TRUE,
            payload: true
        })
    }
}
export function flagFalse () {
    return function (dispatch) {
        return dispatch({
            type: FLAG_FALSE,
            payload: false
        })
    }
}