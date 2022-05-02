import React from "react";
import formatDate from "../../helpers/formatDate";
import Button from "../button/Button";
import { TableProps } from "./TableTypes";
import { TableStyles } from "./TableStyles";
import toBigFirstLetter from "../../helpers/toBigFirstLetter";
import { Flex } from "../flex/Flex";
import { baseTheme } from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import config from "../../config";

const {
  ROUTES: { DETAILS },
} = config;

const {
  colors: { redPrimery, blackPrimery },
} = baseTheme;

const Table: React.FC<TableProps> = ({
  reviews,
  setSortField,
  togleSort,
  sortParams,
  removeReview,
}) => {
  const listValues = ["id", "nickname", "createdAt", "updatedAt", "sort"];
  const navigate = useNavigate();

  return (
    <TableStyles>
      <thead>
        <tr>
          {listValues.map((value, idx) => (
            <th key={idx}>
              {value === "sort" ? (
                <Button width={"100%"} click={() => togleSort()}>
                  {toBigFirstLetter(value)}
                  {sortParams === "desc" ? (
                    <span>&#11014;</span>
                  ) : (
                    <span>&#11015;</span>
                  )}
                </Button>
              ) : (
                <Button width={"100%"} click={() => setSortField(value)}>
                  {toBigFirstLetter(value)}
                </Button>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {reviews.map(({ id, nickname, createdAt, updatedAt }) => {
          return (
            <tr key={id} onClick={() => navigate(DETAILS + "/" + id)}>
              <td>{id}</td>
              <td>{nickname}</td>
              <td>{formatDate(createdAt!)}</td>
              <td>{formatDate(updatedAt!)}</td>
              <td>
                <Flex justify={"space-around"}>
                  <Button
                    bg={"transparent"}
                    color={redPrimery}
                    fontSize={"2rem"}
                    width={"100%"}
                    click={(e: any) => {
                      e.stopPropagation();
                      removeReview(id);
                    }}
                  >
                    Delete
                  </Button>
                </Flex>
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableStyles>
  );
};

export default Table;
