import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productReducer";

const reducer = combineReducers({
  products: productReducer,
});

// let initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer: reducer,
  middleware: middleware,
  devTools: applyMiddleware(...middleware),
});

/* const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
 */
export default store;
