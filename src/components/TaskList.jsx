import React from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.name}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
