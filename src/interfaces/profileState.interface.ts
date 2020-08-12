import { Todo } from './todo.interface'
import { User } from './user.interface';

export interface IProfileState {
    todos: Todo[],
    user: User | null,
    loading: boolean
}