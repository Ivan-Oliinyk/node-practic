import React from "react";
import { Flex } from "../flex/Flex";
import pushStar from "../../helpers/pushStar";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";
import { baseTheme } from "../../styles/theme";

const {
  colors: { redPrimery },
} = baseTheme;

type Props = {
  img: string;
  title: string;
  star: number;
  field: "text1" | "text2" | "text3";
  register: any;
  errors: any;
  value: string;
};

const ImgWrapper = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  margin-right: 8px;

  img {
    width: 100%;
    border-radius: 5px;
  }
`;

const StarWrapper = styled.div`
  padding: 13px 0;

  h3 {
    margin-bottom: 4px;
  }
`;

export const InputWrapper = styled.div`
  input {
    margin-bottom: 3.5rem;
  }

  span {
    display: block;
    font-size: 64px;
    color: ${redPrimery};
    position: absolute;
  }
`;

const FormComment: React.FC<Props> = ({
  img,
  title,
  star,
  field,
  register,
  errors,
  value,
}) => {
  return (
    <Flex justify="space-between">
      <Flex justify="space-between">
        <ImgWrapper>
          <img src={img} alt={title} style={{ width: "72px" }} />
        </ImgWrapper>
        <StarWrapper>
          <h3>{title}</h3>
          <div>
            {pushStar(star).map((item: string, idx: number) => (
              <img key={idx} src={item} alt="star" />
            ))}
          </div>
        </StarWrapper>
      </Flex>
      <Flex direction={"column"} position={"relative"}>
        <InputWrapper>
          <input
            placeholder="Your thoughts about the component"
            type="text"
            {...register(field, {
              required: "Enter comment !",
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
        </InputWrapper>
        {errors?.[field] && (
          <ErrorMessage>{errors?.[field]?.message || "error!"}</ErrorMessage>
        )}
      </Flex>
    </Flex>
  );
};

export default FormComment;
