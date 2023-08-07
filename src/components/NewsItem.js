import React, { Component } from "react";
import "./NewsItem.css";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    if (title !== null && title.length > 65) {
      title = title.slice(0, 65) + "...";
    } else {
      title = "";
    }

    if (description !== null && description.length > 140) {
      description = description.slice(0, 140) + "...";
    } else {
      description = "";
    }

    if (imageUrl === null) {
      imageUrl =
        "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg";
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
