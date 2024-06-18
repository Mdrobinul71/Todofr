// src/components/AddTodoForm.js
import React, { useState } from 'react';

function AddTodoForm({ onAdd }) {
  const [newTask, setNewTask] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: newTask }),
      });
      const newTaskData = await response.json();
      onAdd(newTaskData);
      setNewTask('');
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  return (
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
  );
}

export default AddTodoForm;
