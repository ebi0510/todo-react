const style = {
    border: "2px solid aquamarine",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px",
    backgroundColor: "azure",
}

export const CompleteTodos = (props) => {
    const { todos, onClickBack } = props;
    return(
        <div style={style}>
            <p className="title">完了のTODO</p>
            <ul>
                {todos.map((todo,index) => {
                    return (
                        <li key={todo}>
                            <div className="list-row">
                                <p className="todo-item">{todo}</p>
                                <button onClick={() => onClickBack(index)}>戻す</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}