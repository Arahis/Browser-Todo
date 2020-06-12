import React from "react";
import TodoList from "./components/TodoList";
import TodosContextProvider from "./contexts/TodosContext";

function App() {
  return (
    <div className="App">
      <TodosContextProvider>
        <TodoList />
      </TodosContextProvider>
    </div>
  );
}

export default App;
