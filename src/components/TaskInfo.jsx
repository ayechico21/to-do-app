import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTask } from "../store/tasks";
import { TaskInfoWrapper } from "./TaskInfo.styled";
const TasksInfo = ({ tasks }) => {
  const [filter, setFilter] = useState("active");
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const handleFilter = () => {
    dispatch(filterTask(tasks, filter));
  };
  return (
    <TaskInfoWrapper>
      <div>Active</div>
      <div>Completed</div>
      <div>
        <select value={filter} onChange={handleFilterChange}>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="all">ALL</option>
        </select>
        <button onClick={handleFilter}>Filter</button>
      </div>
    </TaskInfoWrapper>
  );
};

export default TasksInfo;
