import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../Routes';

import { Nav } from './styles';

export default function Layout(props) {
  return (
    <BrowserRouter>
      <Header 
        onToggleTheme={props.onToggleTheme} 
        selectedTheme={props.selectedTheme}
      />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/1224231213432">Post</Link>
      </Nav>
      <Routes />
      {/* <Footer 
        onToggleTheme={props.onToggleTheme}
        selectedTheme={props.selectedTheme}
      /> */}
    </BrowserRouter>
  );
}
