import React from "react";
import TodoList from "./components/Todos/TodoList";
import TodosContextProvider from "./contexts/TodosContext";
import Dashboard from "./components/Dashboard";

function App() {
  
  return (
    <div className="App">
      <TodosContextProvider>
        <TodoList />
      </TodosContextProvider>
      <Dashboard />
    </div>
  );
}

export default App;
