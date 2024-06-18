// src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('/todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  const handleAdd = (newTask) => {
    setTodos([...todos, newTask]);
  };

  const handleUpdate = (updatedTask) => {
    setTodos(todos.map((todo) => (todo._id === updatedTask._id ? updatedTask : todo)));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">To-do List</h2>
        </div>
        <div className="card-body">
          <AddTodoForm onAdd={handleAdd} />
          <ul className="list-group">
            {todos.map((todo) => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;


/*
import React, { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await fetch("/todos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: newTask }),
      });
      const newTaskData = await res.json();
      setTodos([...todos, newTaskData]);
      setNewTask("");
    } catch (err) {
      console.error("Failed to add task:", err);
    }
  };

  const handleUpdate = async (id, updates) => {
    try {
      const res = await fetch(`/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      });
      const updatedTask = await res.json();
      setTodos(todos.map((todo) => (todo._id === id ? updatedTask : todo)));
      setEditingTask(null);
      setEditingText("");
    } catch (err) {
      console.error("Failed to update task:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error("Failed to delete task:", err);
    }
  };

  const startEditing = (todo) => {
    setEditingTask(todo._id);
    setEditingText(todo.task);
  };

  const cancelEditing = () => {
    setEditingTask(null);
    setEditingText("");
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">To-do List</h2>
        </div>
        <div className="card-body">
          <form className="mb-3" onSubmit={handleAdd}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter task..."
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary">
                  Add Task
                </button>
              </div>
            </div>
          </form>
          <ul className="list-group">
            {todos.map((todo) => (
              <li
                key={todo._id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {editingTask === todo._id ? (
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          handleUpdate(todo._id, { task: editingText })
                        }
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={cancelEditing}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() =>
                          handleUpdate(todo._id, { completed: !todo.completed })
                        }
                        className="mr-3"
                      />
                      <br></br>
                      <h6>{todo.task}</h6>
                    </div>
                    <div>
                      <button
                        className="btn btn-info mr-2"
                        onClick={() => startEditing(todo)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(todo._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
*/