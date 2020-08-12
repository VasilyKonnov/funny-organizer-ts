import { LOAD_TODOS, LOAD_USER, DELETE_TODO, SET_LOADING, UPDATE_TODO, ADD_TODO } from '../types';
import { IProfileState } from '../../interfaces/profileState.interface';
import { Todo } from '../../interfaces/todo.interface';
// import { User } from '../../interfaces/user.interface';

const handlers: any = {
    [LOAD_USER]: (state: IProfileState, { payload }: any): IProfileState => {
        return { ...state, user: { ...payload }, loading: false }
    },
    [LOAD_TODOS]: (state: IProfileState, { payload }: any) => ({ ...state, todos: payload, loadingTodos: false }),
    [SET_LOADING]: (state: IProfileState) => ({ ...state, loading: true }),
    [UPDATE_TODO]: (state: IProfileState, { payload }: any) => {
        let todos = state.todos;
        const { id } = payload;
        const index = todos.findIndex((todo: Todo) => todo.id === id);
        todos[index] = payload;
        return { ...state, todos };
    },
    [DELETE_TODO]: (state: IProfileState, { id }: any) => {
        let todos = state.todos;
        const index = todos.findIndex((todo: Todo) => todo.id === id);
        if (index !== -1)
            todos = todos.splice(index, 1);
        return { ...state, todos };
    },
    [ADD_TODO]: (state: IProfileState, { payload }: any) => {
        return { ...state, todos: [payload, ...state.todos] }
    },
    DEFAULT: (state: IProfileState) => state
}

export const profileReducer = (state: IProfileState, action: any) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}