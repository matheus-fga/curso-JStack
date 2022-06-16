import React, { Fragment } from 'react';

import Header from './Header';
import Post from './Post';


function App() {

  const category = 'Posts da Semana'

  return (
    <Fragment>
      <Header title="JStack's Blog">
        <h2>Posts da Semana</h2>
      </Header>

      <hr />

      <Post 
        post={{
          title: 'Título da notícia 01', 
          subtitle: 'Subtítulo 01',
        }}
      />

      <Post 
        post={{
          title: 'Título da notícia 02', 
          subtitle: 'Subtítulo 02',
        }}
      />
    </Fragment>
  );
}

export default App;