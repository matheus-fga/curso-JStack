import React, { Fragment } from "react";

function Header(props) {
  return (
    <Fragment>
      <h1>{props.title}</h1>
      {props.children}
    </Fragment>
  );
}

export default Header;