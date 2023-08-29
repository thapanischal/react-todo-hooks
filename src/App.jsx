import React, { useState, useEffect } from "react";
import "./App.css";
import { InputTodo } from "./component/InputTodo";
import { Incompletearea } from "./component/Incompletearea";

export const App = () => {
  const storedTodos = JSON.parse(localStorage.getItem("incompleteTodos")) || [];
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(storedTodos);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("incompleteTodos", JSON.stringify(incompleteTodos));
  }, [incompleteTodos]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    if (editIndex !== null) {
      const newTodos = [...incompleteTodos];
      newTodos[editIndex].text = todoText;
      setIncompleteTodos(newTodos);
      setEditIndex(null);
    } else {
      const newTodos = [
        ...incompleteTodos,
        { text: todoText, completed: false },
      ];
      setIncompleteTodos(newTodos);
    }
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos[index] = { ...newTodos[index], completed: true };
    setIncompleteTodos(newTodos);
  };
  const onClickEdit = (index) => {
    setEditIndex(index);
    setTodoText(incompleteTodos[index].text);
  };

  return (
    <div>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
      />
      <Incompletearea
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
      />
    </div>
  );
};

export default App;
