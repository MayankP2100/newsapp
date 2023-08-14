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
  pageSize = 12;
  country = "in";
  render() {
    return (
      <>
        <Router>
          <Navbar />

          <Routes>
            <Route
            exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"entertainment"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"health"}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"sports"}
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
