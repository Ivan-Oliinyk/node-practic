import React from "react";
import styled from "styled-components";

type MessageProps = {};

const MessageStyles = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;

  div {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -100%);
    font-size: 3rem;
  }
`;

const Messege: React.FC<MessageProps> = ({ children }) => {
  return (
    <MessageStyles>
      <div>{children}</div>
    </MessageStyles>
  );
};

export default Messege;
