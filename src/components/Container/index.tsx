import { MainContainer } from "./styles";
import { ReactNode } from "react";
interface IContainer {
  children: ReactNode;
}

const Container = ({ children }: IContainer) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Container;
