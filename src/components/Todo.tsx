import { FunctionComponent } from "react";
import { ITodo } from "../models";

interface TodoProps {
    todo: ITodo
}
 
const Todo: FunctionComponent<TodoProps> = ({todo}) => {
    return ( 
        <li className="todo">
                <p className="todo-date">{todo?.created_at}</p>
                <p className="todo-name">{todo?.name}</p>
                <p className="todo-date">Category: <span>{todo?.Category.name}</span></p>
                <p className="todo-desc">{todo?.description}</p>
                <div className="btn-container">
                    <button className="btn">Delete</button>
                    <button className="btn">Edit</button>
                </div>
        </li>
    );
}
 
export default Todo;