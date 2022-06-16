import React, { Fragment } from "react";

function Post(props) {
  return (
    <Fragment>
      <article>
        <h3>{props.post.title}</h3>
        <small>{props.post.subtitle}</small>
      </article>
      <br/>
    </Fragment>
  );
}

export default Post;