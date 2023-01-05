import React from "react";
import { useDispatch } from "react-redux";
import { taskDone } from "../store/tasks";
const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleOnDone = () => {
    dispatch(taskDone(task));
  };
  return (
    <>
      <h3>{task.name}</h3>
      <p>{task.isDone ? "Completed" : "Active"}</p>
      <button onClick={handleOnDone}>Done</button>
      <button>Delete</button>
    </>
  );
};

export default Task;
