import React from "react";
import { Flex } from "../flex/Flex";
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

const {
  colors: { whitePrimery },
} = baseTheme;

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 36px;

  input {
    min-width: 100%;
    position: relative;
    padding-right: 40px;
  }

  img {
    display: block;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 17px;
    height: 17px;
    background-image: url("/images/Union.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  span {
    position: absolute;
    top: -5px;
    left: 16px;
    display: block;
    background-color: ${whitePrimery};
    font-size: 12px;
    font-weight: 500;
  }
`;

type Props = {
  register: any;
  errors: any;
  field: string;
  value: string;
};

const FormInputNickname: React.FC<Props> = ({
  register,
  errors,
  field,
  value = "",
}) => {
  return (
    <Flex direction={"column"} position={"relative"}>
      <Wrapper>
        <input
          type="text"
          {...register(field, {
            required: "Enter Nickname !",
            minLength: {
              value: 2,
              message: "Lenght must been min 2 characters",
            },
            maxLength: {
              value: 30,
              message: "Lenght must be at most 20 characters",
            },
          })}
          defaultValue={value}
        />
        <span>Your Nickname (other users will see this)</span>
        <img src="/images/Union.png" alt="union" />
      </Wrapper>
      {errors?.[field] && (
        <ErrorMessage>{errors?.[field]?.message || "error!"}</ErrorMessage>
      )}
    </Flex>
  );
};

export default FormInputNickname;
