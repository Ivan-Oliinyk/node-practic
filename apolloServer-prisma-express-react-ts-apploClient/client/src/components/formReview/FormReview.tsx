import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CommentsWrapper, FormReviewStyles } from "./FormReviewStyles";
import Button from "../button/Button";
import FormComment from "./FormComment";
import { FormSummary } from "./FormSummary";
import FormInputNickname from "./FormInputNickname";
import PrivatPolicy from "./PrivatPolicy";
import { ReviewInputData } from "../../types";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../config";

const { PRINT_SERVICE } = config;

type Inputs = {
  text1: string;
  text2: string;
  text3: string;
  summary: string;
  nickname: string;
  policy: string;
};

type TdataComments = {
  img: string;
  title: string;
  star: number;
  field: "text1" | "text2" | "text3";
  text: string;
};

type Data = {
  data?: ReviewInputData;
  submit: any;
};

const FormReview: React.FC<Data> = ({ data, submit }) => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setValue,
  } = useForm<Inputs>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    submit(data);
    navigate("/");
  };

  let nickname = "",
    summary = "",
    text1 = "",
    text2 = "",
    text3 = "";

  if (data) {
    const { review }: any = data;
    nickname = review.nickname;
    summary = review.summary;
    text1 = review.text1;
    text2 = review.text2;
    text3 = review.text3;
  }

  const dataComments: TdataComments[] = [
    {
      img: "/images/first.png",
      title: "Morrocan Chicken",
      star: 3,
      field: "text1",
      text: text1,
    },
    {
      img: "/images/second.png",
      title: "Couscous Pilaf",
      star: 3,
      field: "text2",
      text: text2,
    },
    {
      img: "/images/third.png",
      title: "Turkey Meatloaf",
      star: 3,
      field: "text3",
      text: text3,
    },
  ];

  return (
    <FormReviewStyles>
      <h1>Meal Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Meal Components</h2>
        <CommentsWrapper>
          {dataComments.map(({ img, title, star, field, text }, idx) => {
            return (
              <FormComment
                key={idx}
                img={img}
                title={title}
                star={star}
                field={field}
                register={register}
                errors={errors}
                value={text}
              />
            );
          })}
        </CommentsWrapper>
        <h2>Meal Review</h2>
        <FormSummary
          title={"Morroccan Chicken With Couscous"}
          img={"/images/summary.jpg"}
          star={3}
          register={register}
          field="summary"
          errors={errors}
          value={summary}
          setValue={setValue}
        />

        <FormInputNickname
          register={register}
          errors={errors}
          field="nickname"
          value={nickname}
        ></FormInputNickname>

        <PrivatPolicy />

        <Button width={"100%"} type="submit" disabled={!isValid}>
          Submit Review
        </Button>
      </form>
    </FormReviewStyles>
  );
};

export default FormReview;
