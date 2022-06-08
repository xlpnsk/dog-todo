import { FormEvent, FunctionComponent } from "react";
import Todo from "./Todo";

interface TodoListProps {
    
}

const TodoList: FunctionComponent<TodoListProps> = () => {
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        alert("You've just clicked save button!")
    }
    return (
        <>
            <form className="task-form" onSubmit={handleSubmit}>
                <div>
                <input type="text" name="task-name" id="task-name" placeholder="Task name"/>
                <select name="task-category" id="task-category">
                    <option value="">--Please choose an option--</option>
                </select>
                </div>
                <div>
                    <textarea name="task-description" id="task-description" cols={30} rows={5} placeholder="Task description"/>
                </div>
                <button className="btn">Save</button>
            </form> 
            <ul className="todo-list">
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
            </ul>
        </> 
    );
}
 
export default TodoList;