import styled, { css } from "styled-components";
import { FlexProps } from "./FlexTypes";

export const StyledFlex = css<FlexProps>`
  display: flex;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "stretch"};
  justify-content: ${({ justify }) => justify || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  position: ${({ position }) => position || "static"};
`;

export const FlexWrapper = styled.div<FlexProps>`
  ${StyledFlex};
`;
