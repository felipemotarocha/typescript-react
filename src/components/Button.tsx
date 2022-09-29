import { FunctionComponent, ReactNode } from "react";

interface ButtonOptions {
  variant: "outlined" | "normal";
}

interface ButtonProps {
  options?: ButtonOptions;
  theme: "dark" | "light";
  onClick: () => void;
  children?: ReactNode;
}

const Button: FunctionComponent<ButtonProps> = () => {
  return <button></button>;
};

export default Button;
