import React, { useEffect, useState } from "react";
import { Review, ReviewData } from "../types";
import { useMutation, useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../query/reviews";
import Container from "../components/container/Container";
import Table from "../components/table/Table";
import { Flex } from "../components/flex/Flex";
import Button from "../components/button/Button";
import Messege from "../components/message/Messege";
import { DELETE_REVIEW } from "../mutation/deleteReview";
import config from "../config";
import LinkWrapper from "../components/linkWrapper/LinkWrapper";

const {
  ROUTES: { DETAILS_NEW },
} = config;

const ListPage: React.FC = () => {
  const [skip, setSkip] = useState<number>(0);
  const [take] = useState<number>(10);
  const [sortField, setSortField] = useState<string>("id");
  const [sortParams, setSortParams] = useState<string>("asc");
  const [reviews, setReview] = useState<Review[]>([] as Review[]);
  const [deleteReview] = useMutation(DELETE_REVIEW);

  const { loading, data, error } = useQuery<ReviewData>(GET_REVIEWS, {
    variables: {
      skip,
      take,
      orderBy: {
        [sortField]: sortParams,
      },
    },
  });

  useEffect(() => {
    if (!loading) {
      setReview(data?.reviews!);
    }
  }, [data, loading]);

  const removeReview = (id: number) => {
    if (window.confirm(`Are you sure you want to delete this review?`)) {
      deleteReview({
        variables: { deleteReviewId: id },
        refetchQueries: [GET_REVIEWS],
      });
    }
  };

  const togleSort = () => {
    return setSortParams(sortParams === "asc" ? "desc" : "asc");
  };

  const nextLists = () => setSkip((pre) => pre + take);
  const previusLists = () => setSkip((pre) => pre - take);

  return (
    <Container>
      {error ? (
        <Messege>An error occurred while loading data!</Messege>
      ) : (
        <>
          {loading ? (
            <Messege>Loading ... </Messege>
          ) : (
            <>
              <LinkWrapper
                justify={"flex-end"}
                to={DETAILS_NEW}
                children={"Create review"}
              />

              <Flex
                direction={"column"}
                justify={"center"}
                align={"center"}
                width={"100%"}
              >
                <Table
                  reviews={reviews}
                  setSortField={setSortField}
                  togleSort={togleSort}
                  sortParams={sortParams}
                  removeReview={removeReview}
                />

                <Flex>
                  <Button
                    disabled={!skip}
                    click={previusLists}
                    margin={"0 10px 0 0"}
                    width={"130px"}
                  >
                    Go back
                  </Button>

                  <Button width={"130px"} click={nextLists}>
                    Load more
                  </Button>
                </Flex>
              </Flex>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default ListPage;
