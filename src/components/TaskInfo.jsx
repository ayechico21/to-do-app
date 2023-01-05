import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTask } from "../store/tasks";
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
    <>
      <div>Active</div>
      <div>Completed</div>
      <select value={filter} onChange={handleFilterChange}>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
        <option value="all">ALL</option>
      </select>
      <button onClick={handleFilter}>Filter</button>
    </>
  );
};

export default TasksInfo;
