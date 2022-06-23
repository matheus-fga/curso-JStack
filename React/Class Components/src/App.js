import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
    }
  };


  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.light}>
        <GlobalStyle />
        <Layout 
          onToggleTheme={() => {
            this.setState(prevState => ({ theme:  prevState.theme === 'light' ? 'dark' : 'light' }));
          }} 
          selectedTheme={theme}
        />
      </ ThemeProvider>
    );
  }
}

// function App() {
//   const [theme, setTheme] = useState('light');

//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.light
//   }, [theme]);

//   function handleToggleTheme() {
//     setTheme((prevState) => prevState === 'light' ? 'dark' : 'light');
//   };

// };

export default App;
