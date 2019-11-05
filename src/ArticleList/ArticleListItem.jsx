import React from "react";
import PropTypes from "prop-types";
import SlugButton from "./SlugButton.jsx";
import ArticleImage from "./ArticleImage.jsx";

class ArticleListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.article.title,
      shortText: props.article.shortText,
      pubDate: props.article.pubDate
    };
  }

  render() {
    return (
      <section>
        <ArticleImage article = {this.props.article} />
        <h1 className = "title">{this.state.title}</h1>
        <p className = "text">{this.state.shortText}</p>
        <p className = "time">{this.state.pubDate} </p>
        <SlugButton className= "btn" article = {this.props.article} />
      </section>
    );
  }
}

export default ArticleListItem;