import React from "react";
import PropTypes from "prop-types";

class SlugButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "show article slug",
      slug: props.slug,
    };
  }

  render() {
    return (

      <button onClick={() => alert(this.props.slug)}>
           {this.state.buttonText}
      </button>
    );
  }
}

export default SlugButton;