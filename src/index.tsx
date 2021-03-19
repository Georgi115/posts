import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./redux/rootReducer";
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer);

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});

const Application = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
ReactDOM.render(Application, document.getElementById("root"));
