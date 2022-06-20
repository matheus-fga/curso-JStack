import React, { Fragment, useContext } from "react";
import PropTypes from 'prop-types';
import styles from './Header.scss'

import Button from "./Button";
import { ThemeContext } from "./ThemeContext";

function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <Fragment>
      <h1 className={styles.title}>{props.title}</h1>
      <Button onClick={onToggleTheme}>
        Mudar Tema
      </Button>
      {props.children}
    </Fragment>
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