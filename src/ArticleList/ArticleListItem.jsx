import React from "react";
import PropTypes from "prop-types";
import SlugButton from "./SlugButton.jsx";

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
      <div className="detail">
        <h1 className = "title">{this.state.title}</h1>
        <p>{this.state.shortText}</p>
        <p className = "time">{this.state.pubDate} <SlugButton article = {this.props.article}/></p>
      </div>
    );
  }
}

export default ArticleListItem;