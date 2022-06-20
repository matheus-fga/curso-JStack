import React, { Fragment } from "react";
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <Fragment>
      <article>
        <h3>{props.post.title}</h3>
        <small>{props.post.subtitle}</small>
        <br />
        <small>Likes: {props.likes + 1}</small>
        <br />
        <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
      </article>
      <br/>
    </Fragment>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;