import { combineReducers } from "redux";

const ADD_TASK = "ADD_TASK";

export function addTask(task) {
  return {
    type: ADD_TASK,
    task,
  };
}

const defaultTasks = [
  {
    name: "task1",
    isDone: false,
  },
];

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

    default:
      return state;
  }
}

const taskApp = combineReducers({
  tasks,
});

export default taskApp;
