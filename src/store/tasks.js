import { combineReducers } from "redux";

const ADD_TASK = "ADD_TASK";
const TASK_DONE = "TASK_DONE";

const defaultTasks = [
  {
    name: "task1",
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

/*********************************REDUCER************************ */
function tasks(state = defaultTasks, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          name: action.task,
          isDone: false,
        },
      ];
    case TASK_DONE:
      const task = state.find((t) => action.task.name === t.name); // Get task to be completed
      const tasks = state.filter((t) => action.task.name !== t.name); // All other tasks

      return [
        ...tasks,
        {
          name: task.name,
          isDone: true,
        },
      ];

    default:
      return state;
  }
}

const taskApp = combineReducers({
  tasks,
});

export default taskApp;
