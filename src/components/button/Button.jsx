import React from "react";
import "./button.css";

function Button(props) {

function handleClick() {
    props.onClick && props.onClick();
}

return (
    <button
    onClick={handleClick}
    className="button"
    >
    {props.children}
    </button>
);
}

export default Button;