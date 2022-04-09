import React, { FC } from "react";

export const App: FC = () => {
  return (
    <div className="flex flex-col items-center justify-items-start h-screen text-red-300 bg-gradient-to-br from-gray-300 via-teal-700 to-gray-800">
      <h1 className="text-3xl mt-10 text-white">Hello Tailwind 👋</h1>
    </div>
  );
};
