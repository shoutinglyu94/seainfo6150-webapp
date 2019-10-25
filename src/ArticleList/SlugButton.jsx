import React from "react";
import PropTypes from "prop-types";

class SlugButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: props.article.author,
      slug: props.article.slug,
    };
  }

  render() {
    return (
      <button className = "btn" onClick={() => alert(this.props.article.slug)}>
           {this.state.buttonText}
      </button>
    );
  }
}

export default SlugButton;