import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: props.color }}
      onClick={props.onclick}
      className="btn"
    >
      {props.showButtonTxt ? "Close" : "Add"}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Button;
