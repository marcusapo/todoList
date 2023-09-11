import React from "react";

export const Todo = ({todo, removeTodo, completeTodo}) => {
    return (
        <div className="todo" style={{textDecoration:todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
              <p>{todo.text}</p>
              <p>{todo.category}</p>
            </div>
            <div>
              <button onClick={() => completeTodo(todo.id)} className="complete">Completar</button>
              <button onClick={() => removeTodo(todo.id)} className="remove">x</button>
            </div>
          </div>
    )
}
