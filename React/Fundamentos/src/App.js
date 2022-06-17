import React, { Fragment } from 'react';

import Header from './Header';
import Post from './Post';

const posts = [
  { title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
  { title: 'Title#02', subtitle: 'Sub#02', likes: 10 },
  { title: 'Title#03', subtitle: 'Sub#03', likes: 50 },
];

function App() {

  const category = 'Posts da Semana'

  return (
    <Fragment>
      <Header>
        <h2>Posts da Semana</h2>
      </Header>

      <hr />

      {posts.map((post, key) => (
        <Post 
          post={{ title: post.title, subtitle: post.subtitle }} 
          likes={post.likes} 
          key={key}
        />
      ))}
    </Fragment>
  );
}

export default App;