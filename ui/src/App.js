import React from "react";

import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
