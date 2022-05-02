import React from "react";
import { ContainerStyles } from "./ContainerStyle";
import { ContainerProps } from "./ContainerTypes";

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <ContainerStyles {...props}>{children}</ContainerStyles>;
};

export default Container;
