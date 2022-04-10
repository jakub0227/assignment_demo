import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../zustand/store";

interface CardProps {
  id: number;
  from: string;
  sent_date: string;
  is_unread: boolean;
  subject: string;
  snippet: string;
}

export const Card: FC<CardProps> = ({
  id,
  from,
  sent_date,
  is_unread,
  subject,
  snippet,
}) => {
  const toggleCheckBox = useStore((state) => state.toggleCheckBox);
  const navigate = useNavigate();
  const handleRedirectToDetails = () => {
    navigate(`/${id}`);
  };

  return (
    <div className="p-8 w-96 my-4 rounded-3xl bg-gray-100 transition duration-200 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
      <h4 className="font-bold text-2xl mb-2">{from}</h4>
      <p className="my-2">Sent Date: {sent_date}</p>
      <p className="my-2">Subject: {subject}</p>
      {snippet && <p className="font-bold text-l mt-10">{snippet}</p>}
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-red-600 text-white font-semibold py-2 px-5 text-sm inline-flex items-center group rounded-3xl"
          onClick={handleRedirectToDetails}
        >
          <p> DETAILS </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <input
          type="checkbox"
          className="rounded form-checkbox h-5 w-5 cursor-pointer"
          defaultChecked={is_unread}
          onChange={() => toggleCheckBox(id)}
        />
      </div>
    </div>
  );
};
