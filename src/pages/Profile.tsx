import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../context/Profile/profileContext";
import TaskCard from "../components/TaskCard";
import AddTask from "../components/AddTask/AddTask";
import { Todo } from '../interfaces/todo.interface';

interface IMatch {
    match: {
        isExact: boolean,
        params: {
            id: number | string
        },
        path: string,
        url: string
    }
}

const Profile = ({ match }: IMatch) => {

    const id = match.params.id;
    const { fetchTodos, fetchUser, addTodo, deleteTodo, updateTodo, todos, user, loading
    } = useContext(ProfileContext)

    useEffect(() => {
        fetchUser(id);
        fetchTodos(id);
        // eslint-disable-next-line
    }, [])

    const renderTodos = (todos: Todo[]): any[] => {
        return todos.map((todo: Todo) => <TaskCard deleteTodo={deleteTodo} updateTodo={updateTodo} todo={todo} key={todo.id} />)
    }
    const completed = todos.filter((todo: Todo) => todo.completed).length;
    const notCompleted = todos.filter((todo: Todo) => !todo.completed).length;

    if (loading || todos.length === 0) {
        return <p className="text-center">Eсли долго нет ответа:<br /><br />
        - Проверьте соединение с интернетом <br />
        - Проверьте корректность адреса пользователя! <br /><br />Loading...</p>
    }

    const { username } = user;

    return (
        <React.Fragment>
            <h1 className="mb-4">{username}</h1>
            <p>
                <b>
                    <span className="text-success">Выполненно {completed} </span>/
                    <span className="text-danger"> Не выполнено {notCompleted}</span>
                </b>
            </p>
            <hr />
            <AddTask addTodo={addTodo} userId={user.id} />
            <hr />
            {renderTodos(todos)}
        </React.Fragment>
    )
}

export default Profile;