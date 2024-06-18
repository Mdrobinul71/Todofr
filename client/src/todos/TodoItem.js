// src/components/TodoItem.js
import React, { useState } from 'react';

function TodoItem({ todo, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [editingText, setEditingText] = useState(todo.task);

  const handleUpdate = async (id, updates) => {
    try {
      const response = await fetch(`/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });
      const updatedTask = await response.json();
      onUpdate(updatedTask);
      setEditing(false);
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/todos/${id}`, {
        method: 'DELETE',
      });
      onDelete(id);
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {editing ? (
        <div className="input-group" >
          <input
            type="text"
            className="form-control"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-success" onClick={() => handleUpdate(todo._id, { task: editingText })}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={() => setEditing(false)}>
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
              onChange={() => handleUpdate(todo._id, { completed: !todo.completed })}
              className="mr-3"
            />
            <h5>{todo.task}</h5>
            
          </div>
          <div>
            <button className="btn btn-info mr-2" onClick={() => setEditing(true)}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={() => handleDelete(todo._id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
