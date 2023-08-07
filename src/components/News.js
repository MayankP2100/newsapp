import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=2aebf6ff38d648849b5ad39a03a55042&page=1&pagesize=18";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  async componentDidUpdate() {}

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2aebf6ff38d648849b5ad39a03a55042&page=${
      this.state.page - 1
    }&pagesize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ page: this.state.page - 1, articles: parsedData.articles });

    window.scrollTo(0, 0);
  };

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 18)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2aebf6ff38d648849b5ad39a03a55042&page=${
        this.state.page + 1
      }&pagesize=18`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });

      window.scrollTo(0, 0);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="container row col-md-auto mx-auto">
          {this.state.articles?.map((element) => {
            return (
              <NewsItem
                key={element.url}
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            );
          })}
          <div className="d-flex justify-content-between my-3">
            <button
              className="btn btn-primary"
              style={{ width: "8rem" }}
              disabled={this.state.page <= 1}
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </button>
            <button
              className="btn btn-primary"
              style={{ width: "8rem" }}
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 18)
              }
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
