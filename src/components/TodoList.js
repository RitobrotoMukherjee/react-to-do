import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddInput from './AddTodo';
import TodoListItem from './TodoListItem';

const getLocalStorage = () => {
  const todos = localStorage.getItem('todos');
  return JSON.parse(todos) || [];
};

const TodoList = () => {
  const [todoList, setTodos] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  const addTodoItem = (title) => {
    const newTodo = { id: todoList.length, title, completed: false };
    setTodos([...todoList, newTodo]);
  };

  const markCompleted = (id) => {
    todoList[id - 1].completed = !todoList[id - 1].completed;
    setTodos([...todoList]);
  };

  const updateTodo = (id, title) => {
    todoList[id].title = title;
    setTodos([...todoList]);
  };

  const deleteTodo = (dId) => {
    const newTodo = todoList.filter(({ id }) => id !== dId).map((todo, i) => {
      const td = { ...todo, id: i + 1 };
      return td;
    });
    setTodos([...newTodo]);
  };

  return (
    <>
      <Header heading="To Do App" />
      <AddInput addTodo={addTodoItem} />
      <ul className="Todo-list">
        {todoList.map((todo) => (
          <TodoListItem
            key={todo.id}
            todoItem={todo}
            handleCompleted={markCompleted}
            updateToDoItem={updateTodo}
            deleteHandle={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
