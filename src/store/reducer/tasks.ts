import { FETCH_USERS_TASKS_START, FETCH_USERS_TASKS_SUCCESS, FETCH_USERS_TASKS_ERROR } from "../actions/actionTypes"

const initialState = {
    usersTasks: [],
    loading: true,
    error: null
}

export default function profileReducer(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_USERS_TASKS_START:
            return {
                ...state, loading: true
            }
        case FETCH_USERS_TASKS_SUCCESS:
            return {
                ...state, loading: false, users: action.users
            }
        case FETCH_USERS_TASKS_ERROR:
            return {
                ...state, loding: false, error: action.error
            }
        default:
            return state
    }
}