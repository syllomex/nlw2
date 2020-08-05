import React, { TextareaHTMLAttributes } from "react";

import "./styles.css";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const Textarea: React.FC<ITextareaProps> = ({ label, name, ...props }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} {...props} />
    </div>
  );
};

export default Textarea;
