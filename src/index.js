import React from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contex/cart.contex";
import { Provider } from "react-redux";
import { Store } from "../src/store/Store";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
