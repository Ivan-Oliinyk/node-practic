import styled from "styled-components";
import { baseTheme } from "../../styles/theme";
import { ButtonStyledProps } from "./buttonTypes";

const {
  colors: { greenPrimery, greySecondary, whitePrimery },
} = baseTheme;

export const StyledButton = styled.button<ButtonStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.8rem;
  width: ${({ width }) => width || "auto"};
  padding: ${({ padding }) => padding || "16px 10px"};
  margin: ${({ margin }) => margin || "0"};
  color: ${({ color }) => color || whitePrimery};
  background-color: ${({ bg }) => bg || greenPrimery};
  text-align: ${({ textAlign }) => textAlign || "center"};
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  font-size: ${({ fontSize }) => fontSize || "1.6rem"};
  border: ${({ borderRadius }) => borderRadius || "none"};
  cursor: ${({ cursor }) => cursor || "pointer"};

  &:disabled {
    background-color: ${greySecondary};
  }
`;
