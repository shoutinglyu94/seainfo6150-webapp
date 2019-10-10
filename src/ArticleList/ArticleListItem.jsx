import React from "react";
import PropTypes from "prop-types";

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
          <button onClick={() => alert(this.props.article.slug)}>
            show article slug
          </button>
        </p>
      </div>
    );
  }
}

export default ArticleListItem;