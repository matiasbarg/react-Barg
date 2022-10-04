import React from "react";

function Button(props) {

  function handleClick() {
    props.onClick();
  }

  return (
    <button
      onClick={handleClick}
      className="btn"
    >
      {props.children}
    </button>
  );
}

export default Button;