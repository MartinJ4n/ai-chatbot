import { FC, ReactElement, KeyboardEvent } from "react";

import { Wrapper, InputSC } from "./styles";

interface InputProps {
  value: string;
  name: string;
  type: string;
  category: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  onKeyPress?: (e: KeyboardEvent) => void;
}

const Input: FC<InputProps> = ({
  value,
  name,
  type,
  placeholder = "...",
  disabled = false,
  onChange,
  onKeyPress,
}): ReactElement => {
  return (
    <Wrapper>
      <InputSC
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={
          onKeyPress
            ? (e: KeyboardEvent<HTMLInputElement>) => onKeyPress(e)
            : undefined
        }
      />
    </Wrapper>
  );
};

export default Input;
