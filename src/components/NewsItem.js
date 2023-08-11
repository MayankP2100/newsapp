import React, { Component } from "react";
import "./NewsItem.css";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, content, author, date } = this.props;

    if (title !== null) {
      title = title.slice(0, 60) + "...";
    } else {
      title = "";
    }

    if (description !== null) {
      description = description.slice(0, 140) + "...";
    } else {
      description = content
        ? content.slice(0, 140) + "..."
        : title.slice(0, 140) + "...";
    }

    if (imageUrl === null) {
      imageUrl =
        "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg";
    }

    author ? (author = author) : (author = "Unknown");
    date = new Date(date).toUTCString();

    return (
      <div className="container card my-3" style={{ width: "25rem" }}>
        <div className="col mt-2 px-1">
          <h2>{title}</h2>
          <img className="image p-2" src={imageUrl} alt="" />
          <p>{description}</p>
          <div className="text-center">
            <a className="btn btn-success mb-1" href={newsUrl}>
              Read More
            </a>
            <p className="card-text text-center mb-2">
              <small className="text-body-secondary">{author}</small>
              <br />
              <small className="text-body-secondary">{date}</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
