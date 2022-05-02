import React from "react";
import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

const {
  colors: { redPrimery },
} = baseTheme;

const Wrapper = styled.div`
  font-size: 1.6rem;
  color: ${redPrimery};
  position: absolute;
  bottom: 10px;
`;

const ErrorMessage: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ErrorMessage;
