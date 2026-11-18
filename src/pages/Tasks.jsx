import { useState } from "react";

function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks((previousTasks) => [...previousTasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks((previousTasks) =>
      previousTasks.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="tasks-page">
      <h1>My Task Manager</h1>
      <p>Add and manage your daily tasks.</p>

      <div>
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && <p>No tasks added yet.</p>}
    </div>
  );
}

export default Tasks;