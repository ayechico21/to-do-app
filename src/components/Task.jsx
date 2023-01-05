import React from "react";

const Task = ({ task }) => {
  return (
    <>
      <h3>{task.name}</h3>
      <p>{task.isDone ? "Completed" : "Active"}</p>
      <button>Done</button>
      <button>Delete</button>
    </>
  );
};

export default Task;
