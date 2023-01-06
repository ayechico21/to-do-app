import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasks";
import { ButtonWrapper, TaskInput, TaskWrapper } from "./NewTask.styled";

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

  const handleClear = () => {
    setTaskName("");
  };

  return (
    <TaskWrapper>
      <TaskInput
        type="text"
        onChange={handleOnChange}
        value={taskName}
        placeholder="Enter task name"
      />
      <ButtonWrapper>
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
        <button onClick={handleClear} className="clear">
          clear
        </button>
      </ButtonWrapper>
    </TaskWrapper>
  );
};

export default NewTask;
