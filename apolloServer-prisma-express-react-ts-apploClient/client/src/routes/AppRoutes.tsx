import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "../pages/ListPage";
import DetailsPage from "../pages/DetailsPage";

import config from "../config";
// import CreateNewReviewPage from "../pages/DetailsPage";

const {
  ROUTES: { LIST, DETAILS, DETAILS_NEW },
} = config;

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ListPage />} />
        <Route path={LIST} element={<ListPage />} />
        <Route path={DETAILS + "/:id"} element={<DetailsPage />} />
        <Route path={DETAILS_NEW} element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
