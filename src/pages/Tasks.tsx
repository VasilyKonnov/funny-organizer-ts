import React from "react"

const Tasks = () => {
    return (
        <React.Fragment>
            <div className="jumbotron">
                <h1 className="display-4">Привет, мир!</h1>
                <p className="lead">Это простой пример блока с компонентом в стиле jumbotron для привлечения дополнительного внимания к содержанию или информации.</p>
                <hr className="my-4" />
                <p>Использются служебные классы для типографики и расстояния содержимого в контейнере большего размера.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="/" role="button">Вернуться на главную</a>
                </p>
            </div>
        </React.Fragment>
    )
}

export default Tasks;