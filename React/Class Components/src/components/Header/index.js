import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default class Header extends React.Component {
  static propTypes = {
    onToggleTheme: PropTypes.func.isRequired,
    selectedTheme: PropTypes.string.isRequired
  }

  render() {
    const { onToggleTheme, selectedTheme } = this.props;

    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button type="button" onClick={onToggleTheme} >
          {selectedTheme === 'light' ? '🌚' : '☀️'}
        </button>
      </Container>
    );
  };
}

