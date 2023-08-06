import React, { Component } from "react";
import "./NewsItem.css";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    if (title.length > 80) {
      title = title.slice(0, 80) + "...";
    }

    if (description.length > 140) {
      description = description.slice(0, 140) + "...";
    }
    return (
      <div className="container card my-3" style={{ width: "25rem" }}>
        <div className="col mt-2 px-1">
          <h2>{title}</h2>
          <img className="image p-2" src={imageUrl} alt="" />
          <p>{description}</p>
          <a className="btn btn-success mb-3" href={newsUrl}>
            Read More
          </a>
        </div>
      </div>
    );
  }
}
