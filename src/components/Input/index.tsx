import { Dispatch, SetStateAction } from "react";
import { InputContainer } from "./styles";

interface InputProps {
  value: string;
  setMinutes: Dispatch<SetStateAction<string>>;
}

const Input = ({ value, setMinutes }: InputProps) => {
  return (
    <InputContainer
      type="number"
      min={0}
      value={value}
      onChange={(e) => setMinutes(e.target.value)}
    />
  );
};

export default Input;
