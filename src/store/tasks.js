import { combineReducers } from "redux";

const ADD_TASK = "ADD_TASK";
const TASK_DONE = "TASK_DONE";
const DELETE_TASK = "DELETE_TASK";
const FILTER_TASK = "FILTER_TASK";

const defaultTasks = [
  {
    name: "Sample task",
    isDone: false,
  },
];

/*************************ACTIONS*************************** */
export function addTask(task) {
  return {
    type: ADD_TASK,
    task,
  };
}

export function taskDone(task) {
  return {
    type: TASK_DONE,
    task,
  };
}

export function deleteTask(task) {
  return {
    type: DELETE_TASK,
    task,
  };
}

export function filterTask(task, filter) {
  return {
    type: FILTER_TASK,
    filter,
    task,
  };
}

/*********************************REDUCER************************ */
function tasks(state = defaultTasks, action) {
  let task, tasks;
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          name: action.task,
          isDone: false, // initially task is incomplete
        },
      ];

    case TASK_DONE:
      console.log(action);
      task = state.find((t) => action.task.name === t.name); // Get task to be toggled
      tasks = state.filter((t) => action.task.name !== t.name); // All other tasks

      return [
        ...tasks,
        {
          name: task.name,
          isDone: !task.isDone, // Toggling task completion status
        },
      ];

    case DELETE_TASK:
      task = state.find((t) => action.task.name === t.name); // Get task to be deleted
      tasks = state.filter((t) => action.task.name !== t.name); // All other tasks

      return tasks;

    case FILTER_TASK:
      if (action.filter === "completed") {
        tasks = state.sort((task1, task2) => {
          if (task1.isDone && task2.isDone)
            // if both completed, sort alphabetically
            return task1.name.toLowerCase() > task2.name.toLowerCase() ? 1 : -1;
          if (!task1.isDone && !task2.isDone)
            // if both active, sort alphabetically
            return task1.name.toLowerCase() > task2.name.toLowerCase() ? 1 : -1;
          if (task1.isDone) return -1;
          return 1;
        });
      } else if (action.filter === "active") {
        tasks = state.sort((task1, task2) => {
          if (task1.isDone && task2.isDone)
            // if both completed, sort alphabetically
            return task1.name.toLowerCase() > task2.name.toLowerCase() ? 1 : -1;
          if (!task1.isDone && !task2.isDone)
            // if both active, sort alphabetically
            return task1.name.toLowerCase() > task2.name.toLowerCase() ? 1 : -1;
          if (task1.isDone) return 1;
          return -1;
        });
      } else {
        tasks = state.sort((task1, task2) => {
          return task1.name.toLowerCase() > task2.name.toLowerCase() ? 1 : -1;
        });
      }
      return [...tasks];

    default:
      return state;
  }
}

const taskApp = combineReducers({
  tasks,
});

export default taskApp;
