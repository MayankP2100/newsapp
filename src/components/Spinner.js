import React, { Component } from "react";
import loading from "./../loading-transparent.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}
