import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const Todo = () => {
    const [todoText, setTodoText] = useState("");

    const [incompleteTodos, setIncompleteTodos] = useState([]);

    const [completeTodos, setcompleteTodos] = useState([]);

    const onChangeTodoText = (event) => {
       setTodoText(event.target.value);
    }

    const onClickAdd = () => {
        if(todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    }

    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    }

    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);

        const newCompleteTodos = [...completeTodos,incompleteTodos[index]];
        setIncompleteTodos(newIncompleteTodos);
        setcompleteTodos(newCompleteTodos);
    }

    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];
        setcompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    }

    const isMaxLimitincompleteTodos = incompleteTodos.length >= 5;
    return(
    <>
    <InputTodo 
        todoText={todoText} 
        onChange={onChangeTodoText} 
        onClick={onClickAdd}
        disabled={isMaxLimitincompleteTodos}
    />

    {isMaxLimitincompleteTodos && (
        <p style={{ color:"red" }}>
            登録できるTodoは５個まで
        </p>
    )}

    <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
    />

    <CompleteTodos 
        todos={completeTodos}
        onClickBack={onClickBack}
    />
    </>
    )
};