import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import {Provider} from "react-redux";
import App from "./components/App";
import counterReducer from "./reducers";

const store = createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
