import React from "react";
import "./Button.css";

export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: props.backgroundColor,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        width: props.width,
        height:props.height,
      }}
    >
      {props.children}
    </button>
  );
};


