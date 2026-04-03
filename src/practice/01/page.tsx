import { useState } from "react";
import './01.css'

type TodoStatus = 'active' | 'complete';

type TodoType  = {
    'id':string
    'status': TodoStatus
    'text': string
    'createdAt':number
};

const mockTodos:TodoType[] = [
    {id:crypto.randomUUID(), status:'active', text:'todo 1번', createdAt:Date.parse('2026-01-01')},
    {id:crypto.randomUUID(), status:'complete', text:'todo 2번', createdAt:Date.parse('2026-02-01')}
];

const ToDo = ({todo, deleteTodo, changeStatus}:{todo:TodoType, deleteTodo:(id:string)=>void, changeStatus:(id:string)=>void}) => {
    return <div className="todo">
        <input type="checkbox" onChange={()=>changeStatus(todo.id)}/>
        <span>{todo.text}</span>
        <span>생성일시: {new Date(todo.createdAt).toLocaleDateString('ko-KR')}</span>
        <button onClick={()=>deleteTodo(todo.id)}>삭제</button>
    </div>
}

const ToDoList = (
    {todos, deleteTodo, changeTodoStatus}:{
        todos:TodoType[];
        deleteTodo:(id:string)=>void;
        changeTodoStatus:(id:string)=>void;
    }) => {
    return (<div className="todo-list">
        {
            todos.map(todo => (<ToDo todo={todo} deleteTodo={deleteTodo} changeStatus={changeTodoStatus}/>))
        }
    </div>)
}

const InputTodo = ({save}:{save:(todo:TodoType)=>void})=> {
    const [newText, setNewText] = useState<string>('');
    return (<div>
        <input value={newText} onChange={val => setNewText(val.target.value)}/>
        <button onClick={()=>save({
            id:crypto.randomUUID(),
            status:'active',
            text:newText,
            createdAt: Date.now()
        })}>추가</button>
    </div>)
}

const TodoPage = () => {
    const [todos, setTodos] = useState<TodoType[]>(mockTodos);

    const saveTodo = (todo:TodoType) => {
        setTodos(prev => [...prev, todo]);
    }

    const deleteTodo = (id:string) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    const changeStatus = (id:string) => {
        setTodos(prev => {
            return prev.map(todo => todo.id === id ? {id, text:todo.text, createdAt:todo.createdAt, status:todo.status === 'active' ? 'complete' : 'active'} :todo)
        })
    }

    return (
    <div className="container">
        <h1>This is ToDo Page</h1>
        <InputTodo save={saveTodo}/>
        <ToDoList todos={todos} deleteTodo={deleteTodo} changeTodoStatus={changeStatus}/>
    </div>)
}

export default TodoPage;