import React from "react";

export const Incompletearea = ({
  incompleteTodos,
  onClickComplete,
  onClickDelete,
  onClickEdit,
}) => {
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTodo</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div
              key={index}
              style={{
                padding: "10px",
                borderBottom: "1px #ccc dotted",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              <li>{todo.text}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
              <button onClick={() => onClickEdit(index)}>編集</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
