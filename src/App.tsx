import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./hoc/Layout/Layout";
import { DetailsPage } from "./pages/DetailsPage/DetailsPage";
import { HomePage } from "./pages/HomePage/HomePage";

export const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailsPage />} />
      </Routes>
    </Layout>
  );
};
