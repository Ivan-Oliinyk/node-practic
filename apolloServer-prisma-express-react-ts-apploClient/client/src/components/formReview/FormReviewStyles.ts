import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

const {
  colors: { greyPrimary, greySecondary, whitePrimery },
} = baseTheme;

export const FormReviewStyles = styled.div`
  margin-top: 20px;
  padding: 32px 54px 18px;
  max-width: 747px;
  min-width: 747px;
  background-color: ${whitePrimery};
  box-shadow: 0 0 3px ${greyPrimary};
  border-radius: 8px;

  img {
    display: inline-block;
  }

  h1 {
    margin-bottom: 1.8rem;
    font-size: 2.4rem;
    text-align: center;
    font-weight: 500;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 500;
  }

  input {
    padding: 18px 16px;
    border-radius: 8px;
    border-color: ${greySecondary};
    color: ${greyPrimary};
    background-color: ${whitePrimery};
    font-size: 1.6rem;
    font-weight: 400;
    width: 390px;

    &:active,
    &:hover,
    &:focus {
      outline: 0;
      outline-offset: 0;
    }
  }
`;

export const CommentsWrapper = styled.div`
  margin-bottom: 3.2rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${greySecondary};
`;
