import styled from "styled-components";
import { StyledFlex } from "../flex/FlexStyles";
import { FlexProps } from "../flex/FlexTypes";
import { baseTheme } from "../../styles/theme";

const {
  colors: { bluePrimery, blueSecondary },
} = baseTheme;

export const LinkWrapperStyles = styled.div<FlexProps>`
  ${StyledFlex}

  a {
    font-size: 1.8rem;
    color: ${bluePrimery};
    border-bottom: 2px solid ${bluePrimery};

    &:hover {
      color: ${blueSecondary};
      border-color: ${blueSecondary};
    }
  }

  margin-bottom: 10px;
`;
