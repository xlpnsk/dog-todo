import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { ICategory, ITodo } from "../models";
import { supabase } from "../supabaseClient";
import Todo from "./Todo";

interface TodoListProps {
    
}

const TodoList: FunctionComponent<TodoListProps> = () => {
    const [todos,setTodos] = useState<ITodo[]>([]);
    const [loading,setLoading] = useState(true)
    const [taskName,setTaskName] = useState('');
    const [taskCategoryId,setTaskCategoryId] = useState('');
    const [taskDescription,setTaskDescription] = useState('');
    const [categories, setCategories] = useState<ICategory[]>([]);
    useEffect(() => {
        getTasks();
        getCategories();
    },[])

    const getTasks = async () => {
        try {
            setLoading(true)
            const userId = supabase.auth.user()!.id
            const { data: Todos, error, status } = await supabase
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

    const getCategories =async () => {
        try {
            const userId = supabase.auth.user()!.id
            const { data: Categories, error, status } = await supabase
                .from('Category')
                .select(`*`)
                .eq('user_id', userId)

            if (error && status !== 406) {
                throw error
            }

            if (Categories) {
                setCategories(Categories)
            }
        } 
        catch (error:any) {
          alert(error.message)
        }      
    }

    const saveTask = async () => {
        try {
            const userId = supabase.auth.user()!.id
            const { error } = await supabase
                .from('Todo')
                .insert([{ 
                    name: taskName, 
                    description: taskDescription, 
                    category_id: taskCategoryId,
                    user_id: userId 
                }])

            if (error) {
                throw error
            }
            alert('Task successfully added');
            setTaskCategoryId('');
            setTaskDescription('');
            setTaskName('');
        } 
        catch (error:any) {
          alert(error.message)
        } 
    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        if(taskCategoryId === ''){
            alert('You have to choose some category')
            return;
        }
        saveTask()
    }
    return (
        <>
            <form className="task-form" onSubmit={handleSubmit}>
                <div>
                <input 
                    type="text" 
                    name="task-name" 
                    id="task-name" 
                    placeholder="Task name" 
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)} 
                />
                <select 
                    name="task-category" 
                    id="task-category"
                    value={taskCategoryId}
                    onChange={(e) => setTaskCategoryId(e.target.value)}
                >
                    <option value="">--Please choose an option--</option>
                    {categories.map((category) =>{
                        return <option key={category.id} value={category.id}>{category.name}</option>
                    })}
                </select>
                </div>
                <div>
                    <textarea 
                        name="task-description" 
                        id="task-description" 
                        cols={30} 
                        rows={5} 
                        placeholder="Task description"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                    />
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