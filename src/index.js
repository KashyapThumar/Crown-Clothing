import React from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store, persistor } from "../src/store/Store";
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
