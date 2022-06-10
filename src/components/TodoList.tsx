import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { ITodo } from "../models";
import { supabase } from "../supabaseClient";
import Todo from "./Todo";

interface TodoListProps {
    
}

const TodoList: FunctionComponent<TodoListProps> = () => {
    const [todos,setTodos] = useState<ITodo[]>([]);
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        getTasks();
    },[])

    const getTasks = async () => {
        try {
            setLoading(true)
            const userId = supabase.auth.user()!.id
            let { data: Todos, error, status } = await supabase
            .from('Todo')
            .select(
                `*,
                Category (
                    name
                )
            `)
            .eq('user_id', userId)
            if (error && status !== 406) {
                throw error
            }
            console.log(Todos)
            if (Todos) {
                setTodos(Todos)
            }
        } 
        catch (error:any) {
          alert(error.message)
        } 
        finally {
          setLoading(false)
        }
    }

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
            {loading ?
                <div>Loading...</div> :
                <ul className="todo-list">
                    {todos.map((todo) => <Todo key={todo.id} todo={todo}/>)}
                </ul>
            } 
            
        </> 
    );
}
 
export default TodoList;