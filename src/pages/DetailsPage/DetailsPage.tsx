import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../../zustand/store";

export const DetailsPage: FC = () => {
  let { id } = useParams<string>();
  const navigate = useNavigate();
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
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-5 my-2 text-sm inline-flex rounded-3xl"
        onClick={() => navigate("/")}
      >
        <p> BACK </p>
      </button>
    </div>
  );
};
