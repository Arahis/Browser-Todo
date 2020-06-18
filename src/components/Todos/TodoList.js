import React, { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";

import TodoCollapsed from "./TodoCollapsed";
import TodoExpanded from "./TodoExpanded";

const TodoList = () => {
  const { toggleTodo } = useContext(TodosContext);

  return (
    <div>
      {/* {todoList()} */}
      {toggleTodo ? <TodoCollapsed /> : <TodoExpanded />}
    </div>
  );
};

export default TodoList;
