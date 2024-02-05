import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import store from "./store.ts";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);