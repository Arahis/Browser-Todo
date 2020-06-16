import React, {useState, useContext} from 'react'
import { TodosContext } from '../../contexts/TodosContext';

const AddItem = () => {
    const {addTodo} = useContext(TodosContext)
    const [newTodo, setNewTodo] = useState('');

    let handleChange = (e) => {
        setNewTodo( e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
    }

    return ( 
        <form onSubmit={handleSubmit} className="add-todo_form">
            <input type="text" name="todo-input" className="todo_input" id="todo-input" value={newTodo} onChange={handleChange} required/>
            <button className="add-todo_btn">Добавить</button>
        </form>
     );
}
 
export default AddItem;