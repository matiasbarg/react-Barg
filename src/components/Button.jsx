import React from "react";
import "./button.css";

function Button({onClick, children}) {

function handleClick() {
    onClick();
}

return (
    <button
    onClick={handleClick}
    className="button"
    >
    {children}
    </button>
);
}

export default Button;