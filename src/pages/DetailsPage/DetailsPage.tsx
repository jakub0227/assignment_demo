import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../zustand/store";

export const DetailsPage: FC = () => {
  let { id } = useParams<string>();
 
  const data = useStore((state) => state.data);
  if (id === undefined) return null;

  const foundDetail = data.find((el) => el.id.toString() === id);
  return (
    <div>
      <h1 className="text-4xl mt-10 text-white">ID: {foundDetail?.id}</h1>
      <h1 className="text-4xl mt-10 text-white">
        Sent Date: {foundDetail?.sent_date}
      </h1>
      <h1 className="text-4xl mt-10 text-white">
        Subject: {foundDetail?.subject}
      </h1>
      <h1 className="text-4xl mt-10 text-white">ID: {foundDetail?.id}</h1>
    </div>
  );
};
