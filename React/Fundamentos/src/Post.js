import React, { Fragment } from "react";
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <Fragment>
      <article>
        <h3>{props.post.read ? <s>{props.post.title}</s> : props.post.title}</h3>
        <small>{props.post.subtitle}</small>
        <br />
        <small>Likes: {props.post.likes + 1}</small>
        <br />
        <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
      </article>
      <br/>
    </Fragment>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Post;