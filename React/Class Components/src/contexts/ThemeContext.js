import React, { createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  state = {
    theme: JSON.parse(localStorage.getItem('theme')) || 'light',
  };

  handleToggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light'
    }), () => {
      localStorage.setItem(
        'theme', 
        JSON.stringify(this.state.theme)
      );
    });
  }

  render() {
    return(
      <ThemeContext.Provider 
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme
        }} 
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
