import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../routes';

export default function Layout(props) {
  return (
    <>
      <Header 
        onToggleTheme={props.onToggleTheme} 
        selectedTheme={props.selectedTheme}
      />
      <Routes />
      <Footer 
        onToggleTheme={props.onToggleTheme}
        selectedTheme={props.selectedTheme}
      />
    </>
  );
}
