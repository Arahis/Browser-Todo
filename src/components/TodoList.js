import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import AddItem from "./AddItem";
import TodoHeader from "./TodoHeader"

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodosContext);

  return (
    <>
    <TodoHeader />
      {todos.length ? (
        <div className="todo_list">
          <ul>
            {todos.map((todo) => {
              return <li key={todo.id}>
                  <p>{todo.title}</p>
                  <span onClick={() => removeTodo(todo.id)}>delete</span>
                  </li>;
            })}
          </ul>
        </div>
      ) : (
        <p>Какие планы на сегодня?</p>
      )}

      <AddItem />
    </>
  );
};

export default TodoList;
