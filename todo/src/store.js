import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import filterReducer from "./reducers/filterReducer";
import taskReducer from "./reducers/taskReducer";

const appReducer = combineReducers({
  taskReducer: taskReducer,
  filterReducer: filterReducer,
});

export default createStore(appReducer, composeWithDevTools());
