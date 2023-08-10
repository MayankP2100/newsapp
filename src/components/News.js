import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "./Spinner";

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
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=2aebf6ff38d648849b5ad39a03a55042&page=1&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePreviousClick = async () => {
    window.scrollTo(0, 0);

    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=2aebf6ff38d648849b5ad39a03a55042&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 18))) {
      window.scrollTo(0, 0);

      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=2aebf6ff38d648849b5ad39a03a55042&page=${
        this.state.page + 1
      }&pagesize=${this.props.pageSize}`;

      this.setState({ loading: true });

      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    const handleArrowUp = () => {
      window.scrollTo(0, 0);
    };

    return (
      <div className="container">
        {this.state.loading && <Spinner />}
        <div className="container row col-md-auto mx-auto">
          {!this.state.loading && this.state.articles?.map((element) => {
            return (
              <NewsItem
                key={element.url}
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                content={element.content}
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
              &larr;Previous
            </button>

            <button
              className="btn btn-sm btn-success"
              onClick={handleArrowUp}
              style={{ width: "3rem" }}
            >
              <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
            </button>

            <button
              className="btn btn-primary"
              style={{ width: "8rem" }}
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 18)
              }
            >
              Next&rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
