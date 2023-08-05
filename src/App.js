import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    );
  }
}
