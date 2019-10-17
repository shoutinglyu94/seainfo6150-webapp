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
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.shortText}</p>
        <p>
          {this.state.pubDate}
          <SlugButton slug = {this.props.article.slug}/>
        </p>
      </div>
    );
  }
}

export default ArticleListItem;