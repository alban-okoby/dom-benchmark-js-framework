# dom-benchmark-js-framework
The repository contains four separate project folders (react-app, angular-app, vue-app, svelte-app)

### 2. Application Code Overview
Each application implements an identical to‑do list with add, view (list all), update (inline edit), and delete functionality. The state always contains an array of task objects { id, name, priority }. Performance‑critical parts are highlighted.



import React, { useState, useCallback } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPriority, setNewPriority] = useState('low');
  const [editId, setEditId] = useState(null);

  const addTask = useCallback(() => {
    setTasks(prev => [...prev, { id: Date.now(), name: newName, priority: newPriority }]);
    setNewName('');
  }, [newName, newPriority]);

  const removeTask = useCallback(id => {
    setTasks(prev => prev.filter(t => t.id !== id));
  }, []);

  const updateTask = useCallback((id, field, value) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, [field]: value } : t));
  }, []);

  return (
    <div>
      <div>
        <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="Task name" />
        <select value={newPriority} onChange={e => setNewPriority(e.target.value)}>
          <option>low</option><option>medium</option><option>high</option>
        </select>
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {editId === task.id ? (
              <>
                <input defaultValue={task.name} onBlur={e => updateTask(task.id, 'name', e.target.value)} />
                <select defaultValue={task.priority} onChange={e => updateTask(task.id, 'priority', e.target.value)}>
                  <option>low</option><option>medium</option><option>high</option>
                </select>
                <button onClick={() => setEditId(null)}>Save</button>
              </>
            ) : (
              <>
                {task.name} ({task.priority})
                <button onClick={() => setEditId(task.id)}>Edit</button>
                <button onClick={() => removeTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;