import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTask } from "../store/tasks";
import { TaskInfoWrapper, RadioInputsWrapper } from "./TaskInfo.styled";

const TasksInfo = ({ tasks }) => {
  const [filter, setFilter] = useState("active");
  const dispatch = useDispatch();

  const onRadioChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };
  const handleFilter = () => {
    dispatch(filterTask(tasks, filter));
  };
  return (
    <TaskInfoWrapper>
      <RadioInputsWrapper>
        <div>
          <input
            type="radio"
            id="active"
            name="filter"
            value="active"
            defaultChecked
            onChange={onRadioChange}
          />
          <label htmlFor="active">Active</label>
        </div>
        <div>
          <input
            type="radio"
            id="completed"
            name="filter"
            value="completed"
            onChange={onRadioChange}
          />
          <label htmlFor="completed">Completed</label>
        </div>
        <div>
          <input
            type="radio"
            id="all"
            name="filter"
            value="all"
            onChange={onRadioChange}
          />
          <label htmlFor="all">All</label>
        </div>
      </RadioInputsWrapper>
      <button onClick={handleFilter}>Filter</button>
    </TaskInfoWrapper>
  );
};

export default TasksInfo;
