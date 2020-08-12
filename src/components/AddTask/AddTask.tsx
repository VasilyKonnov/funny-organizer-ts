import React, { useState } from "react";
import "./AddTask.css";


interface IAddTodo {
    userId: Number,
    id?: Number,
    addTodo: Function
}


const AddTask = (props: IAddTodo) => {
    const [taskTitle, setTaskTitle] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTaskTitle(event.target.value);
    }
    const handleClick = () => {
        console.log(props)
        props.addTodo({ userId: props.userId, title: taskTitle, completed: false });
        setTaskTitle("");
    }

    return (
        <React.Fragment>
            <form className="bg-light addTaskForm" onSubmit={handleSubmit}>
                <h3 className="mb25">Добавить задачу</h3>
                <p className="fz10">Если добавить несколько задач, затем хотябы одну отредактировать и удалить, то
                удаляться задачи загруженные по умолчанию.
                <br /><br />Это связано с тем что в этом приложении используется тестовый API который только имитирует добавление нового эллемента в базу данных.
                </p>
                <input
                    onChange={handleInputChange}
                    className="addTaskForm-input"
                    placeholder={"Введите название задачи"}
                    value={taskTitle}
                />
                <button onClick={handleClick} disabled={taskTitle.length ? false : true} className="btn btn-success">Добавить задачу</button>
            </form>
        </React.Fragment >
    )
}
export default AddTask;