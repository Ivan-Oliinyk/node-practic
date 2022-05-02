export interface Review {
  id?: number;
  text1?: string;
  text2?: string;
  text3?: string;
  summary?: string;
  nickname?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ReviewData {
  reviews: Review[];
}

export interface ReviewInputData {
  text1?: string;
  text2?: string;
  text3?: string;
  summary?: string;
  nickname?: string;
}

enum SortOrder {
  asc = "asc",
  desc = "desc",
}
export interface ReviewOrderByFieldInput {
  id?: SortOrder;
  text1?: SortOrder;
  text2?: SortOrder;
  text3?: SortOrder;
  summary?: SortOrder;
  nickname?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}
