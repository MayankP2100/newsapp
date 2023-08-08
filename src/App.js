import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowDown, faArrowUp);

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News pageSize={12}/>
      </>
    );
  }
}
