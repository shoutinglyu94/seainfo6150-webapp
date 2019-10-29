import React from "react";
import PropTypes from "prop-types";


class ArticleImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.article.title,
      url: props.article.image._url,
    };
  }

  render() {
    return (
      <img className = "image" src={this.state.url} alt={this.state.title} />
    );
  }
}

export default ArticleImage;