import React, { createContext, useState, useCallback } from "react";
import { v1 as uuidv1 } from "uuid";
import { useLocalStorage } from "../custome_hooks/useLocalStorage"

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [collapsTodo, setCollapsTodo] = useState(false);

  let toggleTodo = useCallback((toggle) => {
    setCollapsTodo(toggle) 
  }, [setCollapsTodo])

  let addTodo = useCallback(
    (title) => {
      setTodos([...todos, { title, id: uuidv1() }]);
    },
    [setTodos, todos]
  );

  let removeTodo = useCallback((id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id
      })
    );
  }, [setTodos, todos]);
  
  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo, collapsTodo }}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
