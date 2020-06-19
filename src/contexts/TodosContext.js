import React, { createContext, useState, useCallback, useMemo, useEffect} from "react";
import { v1 as uuidv1 } from "uuid";
import { useLocalStorage } from "../custome_hooks/useLocalStorage";
import { useWindowSize } from "../custome_hooks/useWindowSize";

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const size = useWindowSize();
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [collapsOnClick, setCollapsOnClick] = useState(false);
  const [toggleTodo, setToggleTodo] = useState(false);

  let handleCollapse = useCallback(
    (state) => {
      setCollapsOnClick(state);
      setToggleTodo(state)
    },
    [setCollapsOnClick, setToggleTodo]
  );

  useEffect(() => {
    if (!collapsOnClick) {
      setToggleTodo(size.width < 1000);
    }
  }, [size, collapsOnClick]);



  let addTodo = useCallback(
    (title) => {
      setTodos([...todos, { title, id: uuidv1() }]);
    },
    [setTodos, todos]
  );

  let removeTodo = useCallback(
    (id) => {
      setTodos(
        todos.filter((todo) => {
          return todo.id !== id;
        })
      );
    },
    [setTodos, todos]
  );

  const result = useMemo(() => ({
    todos, addTodo, removeTodo, toggleTodo, handleCollapse
  }), [todos, addTodo, removeTodo, toggleTodo, handleCollapse])

  return (
    <TodosContext.Provider
      value={result}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
