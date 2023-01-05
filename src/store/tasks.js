import { combineReducers } from "redux";

const ADD_TASK = "ADD_TASK";
const TASK_DONE = "TASK_DONE";
const DELETE_TASK = "DELETE_TASK";

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

    default:
      return state;
  }
}

const taskApp = combineReducers({
  tasks,
});

export default taskApp;
