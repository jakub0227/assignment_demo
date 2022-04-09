import React, { FC, useState } from "react";

interface CardProps {
  id: number;
  from: string;
  sent_date: string;
  is_unread: boolean;
  subject: string;
  snippet?: string;
}

export const Card: FC<CardProps> = ({
  id,
  from,
  sent_date,
  is_unread,
  subject,
  snippet,
}) => {
  const [checked, setChecked] = useState(is_unread);
  return (
    <div className="bg-zinc-100 p-6 w-[30rem] h-min my-10 rounded-xl flex-col items-center justify-center">
      <h4 className="font-normal text-l mb-2 underline">{id}</h4>
      <h4 className="font-bold text-xl mb-2">{from}</h4>
      <p className="my-2">Sent Date: {sent_date}</p>
      <p className="my-2">Subject: {subject}</p>
      {snippet && <p className="font-bold text-l mt-6">{snippet}</p>}
      <div className="flex justify-between items-center mt-4">
        <button className="bg-red-600 text-white font-semibold py-2 px-5 text-sm inline-flex items-center group rounded-3xl">
          <p> DETAILS </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <input
          type="checkbox"
          className="rounded form-checkbox h-5 w-5"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
      </div>
    </div>
  );
};
