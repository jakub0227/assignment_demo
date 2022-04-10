import { FC } from "react";

export const Layout: FC = (props) => {
  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-br from-gray-300 via-teal-700 to-gray-800">
      {props.children}
    </div>
  );
};
