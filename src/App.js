import { useState } from "react";
import "./App.css";

import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./Store/appStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </>

  )
}

export default App;
