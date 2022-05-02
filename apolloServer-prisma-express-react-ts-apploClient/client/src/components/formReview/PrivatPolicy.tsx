import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 44px;
  display: flex;
  align-items: center;
  font-size: 12px;

  input {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    border-radius: 3px;
  }

  a {
    color: green;
    font-weight: 500;
  }
`;

const PrivatPolicy: React.FC = () => {
  return (
    <Wrapper>
      <input type="checkbox" name="policy" />
      <span>
        I confirm that I have read and accepted{" "}
        <a href="#">Terms and Conditions</a> and <a href="#"> Privacy Policy</a>
      </span>
    </Wrapper>
  );
};

export default PrivatPolicy;
