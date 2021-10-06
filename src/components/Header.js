import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router";

const Header = (props) => {
  const onclick = () => {
    props.onAdd();
  };
  const location = useLocation();
  return (
    <header className="header">
      <h1>{props.title}</h1>
      {location.pathname === "/" && (
        <Button
          color="green"
          showButtonTxt={props.showButtonTxt}
          onclick={onclick}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
