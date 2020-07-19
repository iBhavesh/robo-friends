import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { searchRobots } from "./reducers";
import { createLogger } from "redux-logger";

const logger = createLogger();

const store = createStore(searchRobots, applyMiddleware(logger));

console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App  />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
