import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../zustand/store";

export const DetailsPage: FC = () => {
  let { id } = useParams<string>();

  const data = useStore((state) => state.data);
  if (id === undefined) return null;

  const foundDetail = data.find((el) => el.id.toString() === id);
  return (
    <div className="bg-zinc-100 p-6 w-[28rem] h-min my-10 rounded-xl flex-col">
      <h5 className="text-xl mt-10 ">
        <span className="font-bold">Details of ID: </span>
        {foundDetail?.id}
      </h5>
      <h5 className="text-xl mt-5 ">
        <span className="font-bold">Sent Date: </span>
        {foundDetail?.sent_date}
      </h5>
      <h5 className="text-xl mt-5 ">
        <span className="font-bold">Subject: </span>
        {foundDetail?.subject}
      </h5>
      <h5 className="text-xl mt-5 italic">{foundDetail?.snippet}</h5>
    </div>
  );
};
