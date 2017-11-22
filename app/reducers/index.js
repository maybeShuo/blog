import { reducer as home } from './homeReducer'
import { combineReducers } from 'redux'

const initialState = {
    isFetching: false,
    errMsg: ''
}

export const actionsTypes = {
    FETCH_START: 'FETCH_START',
    FETCH_END: 'FETCH_END',
    FETCH_ERROR: 'FETCH_ERROR'
}

export const actions = {
    fetch_start: () => {
        return {
            type: actionsTypes.FETCH_START
        }
    },

    fetch_end: () => {
        return {
            type: actionsTypes.FETCH_END
        }
    },

    fetch_error: (msg) => {
        return {
            type: actionsTypes.FETCH_ERROR,
            msg: msg
        }
    }
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case actionsTypes.FETCH_START: 
            return {
                ...state,
                isFetching: true
            }
        case actionsTypes.FETCH_END:
            return {
                ...state,
                isFetching: false
            }
        case actionsTypes.FETCH_ERROR:
            return {
                isFetching: false,
                errMsg: action.msg
            }
        default:
            return state;
    }
}

export default combineReducers({
    home,
    state: reducer
})