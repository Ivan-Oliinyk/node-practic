import React from "react";
import styled from "styled-components";
import { Flex } from "../flex/Flex";
import pushStar from "../../helpers/pushStar";
import { baseTheme } from "../../styles/theme";

const {
  colors: {
    greySecondary,
    greyPrimary,
    whitePrimery,
    brownPrimery,
    redPrimery,
  },
} = baseTheme;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 145px;
`;

const CardSummary = styled.div`
  width: 235px;
  margin-right: 1.6rem;
  padding: 1.6rem 1.6rem 1.6rem;
  border-radius: 8px;
  border: 1px solid ${greySecondary};

  span {
    margin-left: 8px;
    font-size: 1.2rem;
    color: ${brownPrimery};
  }
`;

const ImageWrapper = styled.div`
  img {
    margin-bottom: 1.6rem;
  }
`;

const InputWrapper = styled.div`
  position: relative;

  textarea {
    padding: 18px 16px;
    border-radius: 8px;
    border: 2px solid ${greySecondary};
    color: ${greyPrimary};
    background-color: ${whitePrimery};
    font-size: 1.6rem;
    font-weight: 400;
    width: 390px;
    height: 100%;
    resize: none;

    &:active,
    &:hover,
    &:focus {
      outline: 0;
      outline-offset: 0;
    }
  }

  span {
    display: block;
    color: ${redPrimery};
    position: absolute;
    bottom: -25px;
    font-size: 16px;
  }
`;

type SummaryProps = {
  img: string;
  title: string;
  star: number;
  register: any;
  field: string;
  errors: any;
  value: string;
  setValue: any;
};

export const FormSummary: React.FC<SummaryProps> = ({
  title,
  img,
  star,
  register,
  field,
  errors,
  value = "",
  setValue,
}) => {
  const starsImagesArr = pushStar(star);
  const foolStars = starsImagesArr.reduce(
    (res, star) => (star === "/images/star-fool.png" ? (res += 1) : res),
    0
  );

  return (
    <Wrapper>
      <CardSummary>
        <ImageWrapper>
          <img src={img} alt="images" />
        </ImageWrapper>
        <h3>{title}</h3>
        <Flex>
          <div>
            {starsImagesArr.map((item: string, idx: number) => (
              <img key={idx} src={item} alt="star" />
            ))}
          </div>
          <Flex align={"center"}>
            <span>{foolStars}/5</span>
          </Flex>
        </Flex>
      </CardSummary>
      <Flex position="relative">
        <InputWrapper>
          <textarea
            placeholder="Meal Summary Review"
            {...register(field, setValue(field, value), {
              required: "Enter comment !",
              minLength: {
                value: 5,
                message: "Lenght must been min 5 characters",
              },
              maxLength: {
                value: 30,
                message: "Lenght must be at most 20 characters",
              },
            })}
          />
          {errors?.[field] && (
            <span>{errors?.[field]?.message || "error!"}</span>
          )}
        </InputWrapper>
      </Flex>
    </Wrapper>
  );
};
