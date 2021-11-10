import { ActionTypes } from "./actions";

const initialState = {
    movies: [],
    word: '',
    id: 0,
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case ActionTypes.CHANGE_WORD:
            return {
                ...state,
                word: action.payload
            }
        case ActionTypes.CHANGE_ID:
            return {
                ...state,
                id: action.payload
        }
        default:
            return state
    }
}

