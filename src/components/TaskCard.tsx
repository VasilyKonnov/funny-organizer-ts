import React, { Component } from 'react';
import { Todo } from '../interfaces/todo.interface';

interface ITaskCardProps {
    deleteTodo: Function,
    updateTodo: Function,
    todo: Todo
}

interface ITaskCardState {
    edit: boolean,
    todo: Todo,
    completed: boolean,
    title: string
}

class TaskCard extends Component<ITaskCardProps, ITaskCardState>  {
    constructor(props: ITaskCardProps) {
        super(props);
        this.state = {
            edit: false,
            todo: props.todo,
            completed: props.todo.completed,
            title: props.todo.title,
        };
    }


    toggleEdit = (): void => {
        if (this.state.edit) {
            this.props.updateTodo({
                ...this.state.todo
            });
        }
        this.setState({
            edit: !this.state.edit
        });
    }

    handleOptionChange = (): void => {
        const { todo } = this.state;
        this.setState(
            {
                todo: {
                    ...todo,
                    completed: !todo.completed
                }
            })
    }

    titleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { todo } = this.state;
        this.setState(
            {
                todo: {
                    ...todo,
                    title: event.target.value
                }
            })
    }

    delete = (): void => {
        this.props.deleteTodo(this.state.todo.id)
    }

    render() {
        const { title, completed } = this.state.todo;
        const { todo, edit } = this.state;
        return (
            <div className="card mb-4" >
                {todo ? (
                    <div className="card-body">
                        {edit ? (
                            <form className="mb-3">
                                <div className="form-check">
                                    <input className="form-check-input radio-done"
                                        type="radio"
                                        value={1}
                                        name="gridRadios"
                                        onChange={this.handleOptionChange}
                                        id="gridRadios1"
                                        defaultChecked={completed}
                                    />
                                    <label className="form-check-label" htmlFor="gridRadios1">
                                        Готово
                                </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input radio-not-done"
                                        type="radio"
                                        value={0}
                                        name="gridRadios"
                                        id="gridRadios2"
                                        onChange={this.handleOptionChange}
                                        defaultChecked={!completed}
                                    />
                                    <label className="form-check-label" htmlFor="gridRadios2">
                                        Не готово
                                </label>
                                </div>
                            </form>
                        ) : (
                                <p className={completed ? "text-success" : "text-danger"}>
                                    {completed ? "Сделано" : "Не сделано"}
                                </p>
                            )}
                        <h5 className="card-title">
                            {edit ?
                                (
                                    <input type="text"
                                        className="update-input"
                                        disabled={!edit}
                                        onChange={(event) => { this.titleChange(event) }}
                                        defaultValue={title}
                                        style={{ width: "100%" }}
                                    />
                                ) : (
                                    <p>{title}</p>
                                )
                            }
                        </h5>
                        <button className="btn btn-primary mr-2" onClick={this.toggleEdit}>
                            {this.state.edit ? 'Сохранить' : "Редактировать"}
                        </button>
                        <button className="btn btn-danger" onClick={this.delete}>Удалить</button>
                    </div>
                ) : (<p className="text-center">загрузка...</p>)
                }
            </div >
        )
    }
}

export default TaskCard;