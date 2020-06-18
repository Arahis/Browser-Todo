import React, { useContext } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {TodosContext} from '../../contexts/TodosContext'

const TodoCollapsed = () => {
    const {handleCollapse} = useContext(TodosContext);

  return (
    <div className="todo-list_container_collapsed">
      <FontAwesomeIcon
        icon={faBars}
        className="icon"
        onClick={() => handleCollapse(false)}
      />
    </div>
  );
};

export default TodoCollapsed;
