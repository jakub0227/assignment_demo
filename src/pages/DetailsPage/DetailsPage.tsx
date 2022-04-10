import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../zustand/store";

export const DetailsPage: FC = () => {
  let { id } = useParams<string>();

  const data = useStore((state) => state.data);
  if (id === undefined) return null;

  const foundDetail = data.find((el) => el.id.toString() === id);
  return (
    <div className="bg-zinc-100 p-6 w-[25rem] h-min my-10 rounded-xl flex-col">
      <h1 className="text-2xl mt-10 font-bold ">
        Details of ID: {foundDetail?.id}
      </h1>
      <h5 className="text-xl mt-5 ">Sent Date: {foundDetail?.sent_date}</h5>
      <h5 className="text-xl mt-5 ">Subject: {foundDetail?.subject}</h5>
      <h5 className="text-xl mt-5">{foundDetail?.snippet}</h5>
    </div>
  );
};
