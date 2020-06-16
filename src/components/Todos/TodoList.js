import React, { useContext, useEffect } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import { useWindowSize } from "../../custome_hooks/useWindowSize";

import TodoCollapsed from './TodoCollapsed';
import TodoExpanded from './TodoExpanded';

const TodoList = () => {
  const { toggleTodo, collapsTodo } = useContext(TodosContext);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 1000) {
      toggleTodo(true);
    } else {
      toggleTodo(false);
    }
  }, [size, toggleTodo]);

  return (
    <div>
      
      {/* <TodoCollapsed /> */}
    {/* {collapsTodo ? <TodoCollapsed /> : <TodoExpanded />} */}
    </div>
  );
};

export default TodoList;
