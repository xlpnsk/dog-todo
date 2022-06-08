import { FunctionComponent } from "react";
import { ITodo } from "../models";

interface TodoProps {
    todo?: ITodo
}
 
const Todo: FunctionComponent<TodoProps> = ({todo}) => {
    return ( 
        <li className="todo">
                <p className="todo-date">Date</p>
                <p className="todo-name">My test TODO</p>
                <p className="todo-date">Category: <span>My category</span></p>
                <p className="todo-desc">Description</p>
                <div className="btn-container">
                    <button className="btn">Delete</button>
                    <button className="btn">Edit</button>
                </div>
        </li>
    );
}
 
export default Todo;