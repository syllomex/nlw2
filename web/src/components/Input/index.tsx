import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<IInputProps> = ({ label, name, ...props }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} id={name} {...props} />
    </div>
  );
};

export default Input;
