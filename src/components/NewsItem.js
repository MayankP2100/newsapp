import React, { Component } from "react";
import "./NewsItem.css";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl } = this.props;

    if (description.length > 150) {
      description = description.slice(0, 100) + "...";
    }
    return (
        <div className="container card my-3" style={{ width: "25rem" }}>
          <div className="col">
            <h2>{title}</h2>
            <img className="image p-2" src={imageUrl} alt="" />
            <p>{description}</p>
          </div>
        </div>
    );
  }
}
