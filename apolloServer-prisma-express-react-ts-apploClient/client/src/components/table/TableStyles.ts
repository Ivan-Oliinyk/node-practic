import styled from "styled-components";
import { baseTheme } from "../../styles/theme";
const {
  colors: { greySecondary },
} = baseTheme;

export const TableStyles: React.FC = styled.table`
  width: 100%;

  thead {
    margin-bottom: 10px;
  }

  tr {
    font-size: 2rem;
    line-height: 5.2rem;
    padding: 15px 5px 5px;
    text-align: center;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${greySecondary};

      td {
        border-radius: 8px;
      }
    }
  }
`;
