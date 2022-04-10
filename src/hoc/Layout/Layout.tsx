import { FC } from "react";

export const Layout: FC = (props) => {
  return (
    <div className="flex flex-col items-center min-h-screen h-auto w-auto bg-gradient-to-br from-gray-300 via-teal-700 to-gray-800 sm:px-20 md:px-12 xl:px-6">
      {props.children}
    </div>
  );
};
