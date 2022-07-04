import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddInput from './AddTodo';
import TodoListItem from './TodoListItem';

const getLocalStorage = () => {
    const todos = localStorage.getItem('todos');
    return JSON.parse(todos) || []; 
}

const TodoList = () => {
    const [todoList, setTodos] = useState(getLocalStorage());

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList));
    }, [todoList]);

    const addTodoItem = (title) => {
        console.log(title);
        const newTodo = { id: todoList.length, title, completed: false};
        setTodos([...todoList, newTodo]);
    }

    const markCompleted = (id) => {
        todoList[id].completed = !todoList[id].completed;
        setTodos(todoList);
    }

    const updateTodo = (id, title) => {
        todoList[id].title = title;
        setTodos(todoList);
    }

    return (
        <React.Fragment>
            <Header heading="To Do App" />
            <AddInput addTodo={addTodoItem} />
            <ul className="Todo-list">
                {todoList.map(todo => {
                    return <TodoListItem key={todo.id} todoItem={todo} handleCompleted={markCompleted} updateToDoItem={updateTodo} />
                })}
            </ul>
        </React.Fragment>
    )
}

export default TodoList;