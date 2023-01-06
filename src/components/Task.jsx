import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, taskDone } from "../store/tasks";

const Task = ({ task }) => {
  const [editStatus, setEditStatus] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  const dispatch = useDispatch();

  // Toggle task completion status
  const handleOnDone = () => {
    dispatch(taskDone(task));
  };

  // Delete task
  const handleOnDelete = () => {
    dispatch(deleteTask(task));
  };

  // Edit task
  let viewMode = {}; // styles for view mode
  let editMode = {}; // styles for edit mode

  if (editStatus) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  // enable editing mode of task
  const handleEditingStatus = () => {
    console.log("edit mode activated");
    setEditStatus(true);
  };

  // edit task info
  const handleOnChange = (event) => {
    setTaskName(event.target.value);
  };

  // update the task
  const handleEdit = (e) => {
    if (e.keyCode === 13) {
      console.log("edit the task");
      dispatch(editTask(task, taskName));

      setEditStatus(false);
    }
  };

  return (
    <>
      <h3>
        <div onClick={handleEditingStatus} style={viewMode}>
          {task.name}
        </div>
        <input
          type="text"
          onChange={handleOnChange}
          onKeyDown={handleEdit}
          value={taskName}
          style={editMode}
        ></input>
      </h3>
      <p>{task.isDone ? "Completed" : "Active"}</p>
      <button onClick={handleOnDone}>Done</button>
      <button onClick={handleOnDelete}>Delete</button>
    </>
  );
};

export default Task;
