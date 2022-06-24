import React from 'react';

import { Container } from './styles';
import { ThemeContext} from '../../contexts/ThemeContext';

export default class Header extends React.Component {

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, handleToggleTheme}) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button type="button" onClick={handleToggleTheme} >
              {theme === 'light' ? '🌚' : '☀️'}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  };
}

