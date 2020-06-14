import React from "react";
import TodoList from "./components/TodoList";
import TodosContextProvider from "./contexts/TodosContext";
import Dashboard from "./components/Dashboard";

import night from "./img/night.jpg";

function App() {
  return (
    <div className="App">
      <TodosContextProvider>
        <TodoList />
      </TodosContextProvider>
      <Dashboard />
      <div className="bg_img_container">
        <img className="bg_image" src={night} alt="night" />
      </div>
    </div>
  );
}

export default App;
