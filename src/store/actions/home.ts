import { FETCH_USERS_SUCCESS, FETCH_USERS_START, FETCH_USERS_ERROR } from "./actionTypes";
import { User } from "../../interfaces/user.interface"

export function fetchUsers() {
    return async (dispatch: any) => {
        try {
            dispatch(fetchUsersStart());
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const usersData = await response.json();
            dispatch(fetchUsersSuccess(usersData))
        } catch (error) {
            fetchUsersError(error)
        }
    }
}

export function fetchUsersStart() {
    return {
        type: FETCH_USERS_START
    }
}
export function fetchUsersSuccess(usersData: User[]) {
    return {
        type: FETCH_USERS_SUCCESS,
        users: usersData
    }
}
export function fetchUsersError(error: string) {
    return {
        type: FETCH_USERS_ERROR,
        error
    }
}