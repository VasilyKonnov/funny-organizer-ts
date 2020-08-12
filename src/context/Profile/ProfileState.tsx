import React, { useReducer } from "react";
import { ProfileContext } from "./profileContext"

import { IProfileState } from '../../interfaces/profileState.interface';
import { profileReducer } from "./profileReducer"
import { LOAD_USER, LOAD_TODOS, DELETE_TODO, SET_LOADING, UPDATE_TODO, ADD_TODO } from '../types'
import { Todo } from '../../interfaces/todo.interface';
import { User } from '../../interfaces/user.interface';


const options = (body = {}): any => ({
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body)
})


export const ProfileState = ({ children }: any) => {

    const initialState: IProfileState = {
        todos: [],
        user: null,
        loading: true
    }
    const url = 'https://jsonplaceholder.typicode.com';

    const [state, dispatch] = useReducer(profileReducer, initialState);

    const deleteTodo = async (id: number) => {
        try {
            let response = await fetch(`${url}/todos/${id}`, {
                method: 'DELETE',
            })
            let payload = await response.json();
            dispatch({
                type: DELETE_TODO,
                payload,
                id
            })
        }
        catch (error) {
            console.error(error);
        }
    }

    const fetchUser = async (id: number) => {
        setLoading();
        try {
            let response = await fetch(`${url}/users/${id}`)
            let payload: User = await response.json();
            dispatch({
                type: LOAD_USER,
                payload
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    const updateTodo = async (body: Todo) => {
        try {
            let response = await fetch(`${url}/todos/${body.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id: body.id,
                    title: body.title,
                    completed: body.completed,
                    userId: body.userId
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            let payload: Todo = await response.json();
            dispatch({
                type: UPDATE_TODO,
                payload
            })
        }
        catch (error) {
            console.error(error);
        }
    }

    const fetchTodos = async (id: number) => {
        try {
            let response = await fetch(`${url}/users/${id}/todos`)
            const todos: Todo[] = await response.json();
            dispatch({
                type: LOAD_TODOS,
                payload: todos
            })
        }
        catch (error) {
            console.error(error);

        }
    }

    const addTodo = async (body: Partial<Todo>) => {
        const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        console.log(body)
        try {
            let response = await fetch(`${url}/todos`, {
                method: 'POST',
                ...options(body),
            }
            )
            let payload: Todo = await response.json();
            dispatch({
                type: ADD_TODO,
                payload: { ...payload, id }
            })
        }
        catch (error) {
            console.error(error);
        }
    }


    const setLoading = () => dispatch({ type: SET_LOADING });
    const { user, loading, todos } = state;

    return (
        <ProfileContext.Provider value={{ updateTodo, deleteTodo, fetchUser, fetchTodos, addTodo, user, todos, loading }}>
            {children}
        </ProfileContext.Provider>
    )

}
