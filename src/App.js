import logo from "./logo.svg";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });
    if (isAlreadyAdded !== -1) {
      toast("Already added in cart", {
        type: "error",
      });
    }
    setCartItem([...cartItem, item]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
