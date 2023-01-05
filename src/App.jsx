import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./store/tasks";
function App() {
  const [taskName, setTask] = useState("");
  const tasks = [...useSelector((state) => state.tasks)].sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(taskName));
    setTask("");
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Task List</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Add Task</p>
            <input
              type="text"
              onChange={(e) => setTask(e.target.value)}
              value={taskName}
            />
          </label>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        <ul>
          {tasks.map((task) => (
            <li key={task.name}>
              <h3>{task.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
