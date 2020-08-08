import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  small?: string;
}

const Input: React.FC<IInputProps> = ({ label, name, small, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>
        {label} {small ? <span>{small}</span> : ""}
      </label>
      <input id={name} {...rest} />
    </div>
  );
};

export default Input;
