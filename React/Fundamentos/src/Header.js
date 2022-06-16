import React, { Fragment } from "react";
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <Fragment>
      <h1>{props.title}</h1>
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