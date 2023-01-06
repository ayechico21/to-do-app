import { combineReducers } from "redux";

const ADD_TASK = "ADD_TASK";
const TASK_DONE = "TASK_DONE";
const DELETE_TASK = "DELETE_TASK";
const FILTER_TASK = "FILTER_TASK";
const EDIT_TASK = "EDIT_TASK";

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

export function editTask(task, edit) {
  return {
    type: EDIT_TASK,
    edit,
    task,
  };
}

/*********************************REDUCER************************ */
function tasks(state = defaultTasks, action) {
  let task, tasks, index;
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
      index = state.indexOf(action.task); // Get index of task to be toggle
      state[index] = {
        name: action.task.name,
        isDone: !action.task.isDone, // Toggling task completion status
      };
      return [...state];

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
          return task1.name.toLowerCase() > task2.name.toLowerCase() ? 1 : -1; // sort alphabetically
        });
      }
      return [...tasks];

    case EDIT_TASK:
      index = state.indexOf(action.task); // Get index task to be edited
      state[index] = {
        name: action.edit, // edit the name of task
        isDone: false,
      };

      return [...state];

    default:
      return state;
  }
}

const taskApp = combineReducers({
  tasks,
});

export default taskApp;
