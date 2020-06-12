import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import {
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AddItem from "./AddItem";
import TodoHeader from "./TodoHeader";

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodosContext);

  return (
    <div className="todo-list_container">
      <TodoHeader />
      {todos.length ? (
        <div className="todo-list">
          <ul>
            {todos.map((todo) => {
              return (
                <li key={todo.id} className="todo-list_item">
                  <p className="todo-list_item_title">{todo.title}</p>

                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="icon"
                    onClick={() => removeTodo(todo.id)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>Какие планы на сегодня?</p>
      )}

      <AddItem />
    </div>
  );
};

export default TodoList;
