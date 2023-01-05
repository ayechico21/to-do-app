import "./App.css";

import { useSelector } from "react-redux";
import TaskList from "./components/TaskList";
import Title from "./components/Title";
import NewTask from "./components/NewTask";
import TasksInfo from "./components/TaskInfo";

function App() {
  const tasks = [...useSelector((state) => state.tasks)].sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });

  return (
    <div className="App">
      <Title />
      <NewTask />
      <TasksInfo />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
