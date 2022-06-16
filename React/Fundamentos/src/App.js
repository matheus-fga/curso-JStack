import React, { Fragment } from 'react';

import Post from './Post';

function App() {

  const category = 'Posts da Semana'

  return (
    <Fragment>
      <h1>JStack's Blog</h1>
      <h2>Posts da Semana</h2>

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