import React, { Fragment, useContext } from "react";
import PropTypes from 'prop-types';

import Button from "../Button";
import styled from 'styled-components';
import { ThemeContext } from "../../context/ThemeContext";

const Title = styled.h1`
  color: #637BF3;
`;

function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <Fragment>
      <Title>{props.title}</Title>
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