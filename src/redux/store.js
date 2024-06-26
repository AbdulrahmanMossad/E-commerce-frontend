import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const initialState = {};
const meddleware = [thunk];
export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...meddleware)
);
