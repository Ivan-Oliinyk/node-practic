import React from "react";
import { FlexWrapper } from "./FlexStyles";
import { FlexProps } from "./FlexTypes";

export const Flex: React.FC<FlexProps> = ({ children, ...props }) => {
  return <FlexWrapper {...props}>{children}</FlexWrapper>;
};
