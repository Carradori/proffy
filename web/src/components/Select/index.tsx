import React, { SelectHTMLAttributes } from "react";

import "./styles.css";

interface ISelectOptions extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    id: number;
    title: string;
    index?: string;
  }>;
}

const Select: React.FC<ISelectOptions> = ({
  label,
  name,
  options,
  ...rest
}) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        <option disabled hidden>
          Selecione a matéria que você quer ensinar
        </option>
        {options.map((option) => (
          <option
            key={option.id}
            value={option.index ? option.index : option.title}
          >
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
