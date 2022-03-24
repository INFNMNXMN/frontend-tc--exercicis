export const ADD_TASK = "@tasks/ADD_TASK";
export const REMOVE_TASK = "@tasks/REMOVE_TASK";
export const TOGGLE_DONE = "@tasks/TOGGLE_DONE";
export const RESET = "@tasks/RESET";

export const addTask = (task) => {
  console.log("addTask :: task => ", task);
  return {
    type: ADD_TASK,
    payload: { id: task.id, content: task.content, done: false },
  };
};

export const removeTask = (task) => {
  return {
    type: REMOVE_TASK,
    payload: { id: task.id, content: task.content, done: false },
  };
};
export const toggleDoneOf = (id) => {
  return {
    type: TOGGLE_DONE,
    payload: { id: id },
  };
};
