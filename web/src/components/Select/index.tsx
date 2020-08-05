import React, { SelectHTMLAttributes } from "react";

import "./styles.css";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{ value: string; label: string }>;
}

const Select: React.FC<ISelectProps> = ({ label, name, options, ...props }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select defaultValue="" name={name} id={name} {...props}>
        <option value="" disabled hidden>Selecione...</option>

        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
