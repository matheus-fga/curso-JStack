import React, { Fragment, useState } from 'react';

import Header from './Header';
import Post from './Post';

function App() { 
  const [posts, setPosts] = useState([
    { title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
    { title: 'Title#02', subtitle: 'Sub#02', likes: 10 },
    { title: 'Title#03', subtitle: 'Sub#03', likes: 50 },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      { title: `Title#0${prevState.length + 1}`, 
      subtitle: `Sub#0${prevState.length + 1}`, 
      likes: 20 }
    ]);
  }

  return (
    <Fragment>
      <Header>
        <h2>
          Posts da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
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