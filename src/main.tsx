import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from 'react-hot-toast'

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <Toaster
          position="top-right"
          reverseOrder={true}
        />
      </Router>
    </Provider>
    ,
  </React.StrictMode>
);
