import React, { createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  state = {
    theme: 'light',
  };

  handleToggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light'
    }));
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
