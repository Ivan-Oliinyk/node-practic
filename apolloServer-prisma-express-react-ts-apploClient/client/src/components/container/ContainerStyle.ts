import styled from "styled-components";
import { ContainerProps } from "./ContainerTypes";

export const ContainerStyles = styled.div<ContainerProps>`
  max-width: ${({ maxWidth }) => maxWidth || "1200px"};
  min-width: ${({ minWidth }) => minWidth || "320px"};
  height: ${({ height }) => height || "auto"};
  padding: ${({ padding }) => padding || "40px 20px"};
  margin: ${({ margin }) => margin || "40px auto"};
`;
