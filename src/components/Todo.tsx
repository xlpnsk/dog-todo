import { FunctionComponent } from "react";
import { ITodo } from "../models";

interface TodoProps {
    todo: ITodo,
    deleteTask: (taskId: number) => void,
    handleEdit: (taskId: number) => void
}
 
const Todo: FunctionComponent<TodoProps> = ({todo,deleteTask,handleEdit}) => {

    return ( 
        <li className="todo">
                <p className="todo-date">{todo?.created_at}</p>
                <p className="todo-name">{todo?.name}</p>
                <p className="todo-date">Category: <span>{todo?.Category.name}</span></p>
                <p className="todo-desc">{todo?.description}</p>
                <div className="btn-container">
                    <button className="btn" onClick={() => deleteTask(todo.id)}>Delete</button>
                    <button className="btn" onClick={() => handleEdit(todo.id)}>Edit</button>
                </div>
        </li>
    );
}
 
export default Todo;