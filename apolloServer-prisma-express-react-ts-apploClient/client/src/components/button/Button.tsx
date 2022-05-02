import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./buttonStyle";
import { ButtonProps } from "./buttonTypes";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const navigate = useNavigate();

  return (
    <>
      {props.link ? (
        <StyledButton
          {...props}
          disabled={props.disabled || false}
          type={props.type || "button"}
          onClick={() => navigate(props.link!)}
        >
          {children}
        </StyledButton>
      ) : (
        <StyledButton
          {...props}
          disabled={props.disabled || false}
          type={props.type || "button"}
          onClick={props.click}
        >
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;
