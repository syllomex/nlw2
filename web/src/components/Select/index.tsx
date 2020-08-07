import React, {
  SelectHTMLAttributes,
  useState,
  useRef,
} from "react";

import arrowDownIcon from "../../assets/images/icons/arrow-down.svg";
import arrowUpIcon from "../../assets/images/icons/arrow-up.svg";

import "./styles.css";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{ value: string; label: string }>;
  onChangeOption?: Function;
}

const Select: React.FC<ISelectProps> = ({
  label,
  name,
  options,
  onChangeOption,
  ...props
}) => {
  const [selected, setSelected] = useState<string>("");
  const [selectedLabel, setSelectedLabel] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);

  const optionsRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function changeOption(value: string, optionLabel: string) {
    setSelected(value);
    setSelectedLabel(optionLabel);

    if (onChangeOption) {
      onChangeOption(name, value);
    }

    hide();
  }

  function hide() {
    if (optionsRef.current) optionsRef.current.hidden = true;
  }

  function show() {
    if (optionsRef.current) optionsRef.current.hidden = false;
  }

  function handleFocus() {
    setFocus(true);
    show();
  }

  function handleBlur() {
    setFocus(false);
    hide();
  }

  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} value={selected} hidden readOnly />
      <button
        type="button"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseDown={focus ? handleBlur : handleFocus}
        className={!selectedLabel ? "text-muted" : ""}
        ref={buttonRef}
      >
        {selectedLabel || "Selecione..."}
        <img
          src={focus ? arrowUpIcon : arrowDownIcon}
          alt="Seta da caixa de seleção"
        />
      </button>
      <ul ref={optionsRef} className="options" hidden>
        {options.map((option, index) => {
          return (
            <li
              key={index}
              onMouseDown={() => {
                changeOption(option.value, option.label);
              }}
              className={selected === option.value ? "active" : ""}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
