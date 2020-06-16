import React, { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import { faTrashAlt, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AddItem from "./AddItem";
import TodoHeader from "./TodoHeader";

const TodoExpanded = () => {
  const { todos, removeTodo, toggleTodo } = useContext(TodosContext);

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

      {/* COLLAPSE TODO SIDEBAR */}
      <span className="collapseTodo">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="icon close_todo"
          onClick={toggleTodo(true)}
        />
      </span>
    </div>
  );
};

export default TodoExpanded;
