import "./App.css";

import { useSelector } from "react-redux";
import TaskList from "./components/TaskList";
import Title from "./components/Title";
import NewTask from "./components/NewTask";
import TasksInfo from "./components/TaskInfo";

function App() {
  const tasks = [...useSelector((state) => state.tasks)];

  return (
    <div className="App">
      <Title />
      <NewTask />
      <TasksInfo tasks={tasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
