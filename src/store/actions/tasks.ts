import { FETCH_USERS_TASKS_SUCCESS, FETCH_USERS_TASKS_START, FETCH_USERS_TASKS_ERROR } from "./actionTypes";
import { Todo } from "../../interfaces/todo.interface";

export function fetchUsersTasks() {
    return async (dispatch: any) => {
        try {
            dispatch(fetchUsersTasksStart());
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const usersTasksData = await response.json();
            dispatch(fetchUsersTasksSuccess(usersTasksData))
        } catch (error) {
            fetchUsersTasksError(error)
        }
    }
}

export function fetchUsersTasksStart() {
    return {
        type: FETCH_USERS_TASKS_START
    }
}
export function fetchUsersTasksSuccess(usersTasksData: Todo[]) {
    return {
        type: FETCH_USERS_TASKS_SUCCESS,
        users: usersTasksData
    }
}
export function fetchUsersTasksError(error: string) {
    return {
        type: FETCH_USERS_TASKS_ERROR,
        error
    }
}