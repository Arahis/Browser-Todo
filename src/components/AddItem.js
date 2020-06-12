import React, {useState, useContext} from 'react'
import { TodosContext } from '../contexts/TodosContext';

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
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo-input" id="todo-input" value={newTodo} onChange={handleChange} required/>
            <button>Добавить в список</button>
        </form>
     );
}
 
export default AddItem;