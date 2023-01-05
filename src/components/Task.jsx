import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, taskDone } from "../store/tasks";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  // Toggle task completion status
  const handleOnDone = () => {
    dispatch(taskDone(task));
  };

  // Delete task
  const handleOnDelete = () => {
    dispatch(deleteTask(task));
  };
  return (
    <>
      <h3>{task.name}</h3>
      <p>{task.isDone ? "Completed" : "Active"}</p>
      <button onClick={handleOnDone}>Done</button>
      <button onClick={handleOnDelete}>Delete</button>
    </>
  );
};

export default Task;
