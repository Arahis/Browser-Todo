import React from "react";
import TodoList from "./components/Todos/TodoList";
import TodosContextProvider from "./contexts/TodosContext";
import Dashboard from "./components/Dashboard";
import TodoExpanded from "./components/Todos/TodoExpanded";

function App() {
  
  return (
    <div className="App">
      <TodosContextProvider>
        {/* <TodoList /> */}
        <TodoExpanded />
      </TodosContextProvider>
      <Dashboard />
    </div>
  );
}

export default App;
