import React, { Fragment, useContext } from "react";
import PropTypes from 'prop-types';

import Button from "./Button";
import { ThemeContext } from "./ThemeContext";

function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <div 
      style={{
        background: 'rgb(150, 150, 150)',
        fontFamily: 'sans-serif'
      }} 
    >
      <h1>{props.title}</h1>
      <Button onClick={onToggleTheme}>
        Mudar Tema
      </Button>
      {props.children}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  title: `JStack's Blog`
};

export default Header;