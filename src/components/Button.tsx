import React from "react";

interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
/*
const Button = ({ text }: Props) => {
  return (
    <button type="button" className="btn btn-primary">
      {text}
    </button>
  )
}
*/
export default Button;
