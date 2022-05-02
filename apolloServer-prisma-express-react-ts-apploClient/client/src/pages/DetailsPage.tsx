import React from "react";
import { useParams } from "react-router-dom";
import { Flex } from "../components/flex/Flex";
import FormReview from "../components/formReview/FormReview";
import { GET_REVIEW } from "../query/review";
import { useMutation, useQuery } from "@apollo/client";
import { ReviewInputData } from "../types";
import { GET_REVIEWS } from "../query/reviews";
import { UPDATE_REVIEW } from "../mutation/updateReview";
import { CREATE_REVIEW } from "../mutation/createReview";

const DetailsPagePage: React.FC = () => {
  const [updateReview] = useMutation(UPDATE_REVIEW);
  const [createReview] = useMutation(CREATE_REVIEW);
  const { id } = useParams();

  const update = (data: ReviewInputData, ID: number = Number(id)) => {
    updateReview({
      variables: { udateReviewId: Number(ID), data: data },
      refetchQueries: [GET_REVIEWS],
    });
  };

  const create = (data: ReviewInputData) => {
    createReview({
      variables: { data: data },
      refetchQueries: [GET_REVIEWS],
    });
  };

  const { loading, data, error } = useQuery<ReviewInputData>(GET_REVIEW, {
    variables: {
      reviewId: Number(id),
    },
  });

  return (
    <>
      <Flex justify={"center"}>
        {id ? (
          <>
            {error ? (
              <p>error</p>
            ) : (
              loading || <FormReview data={data} submit={update} />
            )}
          </>
        ) : (
          <FormReview submit={create} />
        )}
      </Flex>
    </>
  );
};

export default DetailsPagePage;
