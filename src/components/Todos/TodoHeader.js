import React, { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";

const TodoHeader = () => {
  const { todos } = useContext(TodosContext);

  return (
    <>
      <h2 className="todos_header">Список дел на сегодня</h2>
      {todos.length ? <p>{`В списке осталось дел: ${todos.length}`}</p> : null}
      
    </>
  );
};

export default TodoHeader;
