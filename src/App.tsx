import React, { FC } from "react";
import { Layout } from "./hoc/Layout";

export const App: FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl mt-10 text-white">Hello Tailwind 👋</h1>
    </Layout>
  );
};
