import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav class="navbar fixed-top"  style={{backgroundColor: "#e3f2fd", color: "black"}}>
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              News Monkey
            </a>
          </div>
        </nav>
      </>
    );
  }
}
