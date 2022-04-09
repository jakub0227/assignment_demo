import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./hoc/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";

export const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
};
