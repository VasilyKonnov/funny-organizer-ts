import { FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../actions/actionTypes"

const initialState = {
    users: [],
    loading: true,
    error: null
}

export default function homeReducer(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_USERS_START:
            return {
                ...state, loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state, loading: false, users: action.users
            }
        case FETCH_USERS_ERROR:
            return {
                ...state, loding: false, error: action.error
            }
        default:
            return state
    }
}