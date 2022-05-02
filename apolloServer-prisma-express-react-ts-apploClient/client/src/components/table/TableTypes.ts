import { Review } from "../../types";

export type TableProps = {
  reviews: Review[];
  setSortField: (value: string) => void;
  togleSort: () => void;
  removeReview: any;
  sortParams: string;
};
