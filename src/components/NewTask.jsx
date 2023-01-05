import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasks";

const NewTask = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(taskName));
    setTaskName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleOnChange}
            value={taskName}
            placeholder="Enter task name"
          />
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
};

export default NewTask;
