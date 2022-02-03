import { Dispatch, SetStateAction } from "react";
import { Button } from "./styles";

interface IButton {
  text: string;
  plan: number;
  setPlan: Dispatch<SetStateAction<number>>;
}

const ButtonSelect = ({ text, setPlan, plan }: IButton) => {
  return <Button onClick={() => setPlan(plan)}>{text}</Button>;
};
export default ButtonSelect;
