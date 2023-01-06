import React from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
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
