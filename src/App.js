import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

library.add(faArrowDown, faArrowUp);

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />

          <Routes>
            <Route
              exact path="/"
              element={
                <News pageSize={12} country={"in"} category={"general"} />
              }
            />
            <Route
              path="/business"
              element={
                <News pageSize={12} country={"in"} category={"business"} />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News pageSize={12} country={"in"} category={"entertainment"} />
              }
            />
            <Route
              path="/health"
              element={
                <News pageSize={12} country={"in"} category={"health"} />
              }
            />
            <Route
              path="/science"
              element={
                <News pageSize={12} country={"in"} category={"science"} />
              }
            />
            <Route
              path="/sports"
              element={
                <News pageSize={12} country={"in"} category={"sports"} />
              }
            />

            <Route
              path="/technology"
              element={
                <News pageSize={12} country={"in"} category={"technology"} />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
