import React, { FC } from "react";
import { ListItem } from "../../types/ListItem";

const DATA: ListItem[] = [
  {
    id: 100795229,
    from: "Kalkulator OC/AC - Onet mailingi@onet.pl",
    sent_date: "2021-12-13 09:00:03",
    is_unread: false,
    subject: "Zaoszczędź! OC już od 230 zł",
    snippet: "",
  },

  {
    id: 100795227,
    from: "Walutomat - Onet mailingi@onet.pl",
    sent_date: "2021-12-13 09:00:02",
    is_unread: false,
    subject: "Wymień walutę szybko i tanio",
    snippet: "Odbierz 50% rabatu na wymianę online",
  },
];

export const HomePage: FC = () => {
  return (
    <>
      <h1 className="text-4xl mt-10 text-zinc-100">Items List</h1>
      {DATA.map((el) => (
        <div
          key={el.id}
          className="bg-zinc-100 p-6 w-[30rem] h-min my-10 rounded-xl flex-col items-center justify-center"
        >
          <h4 className="font-normal text-l mb-2 underline">{el.id}</h4>
          <h4 className="font-bold text-xl mb-2">{el.from}</h4>
          <p className="my-2">Sent Date: {el.sent_date}</p>
          <p className="my-2">Subject: {el.subject}</p>
          {el.snippet && <p className="font-bold text-l mt-6">{el.snippet}</p>}
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
            <input type="checkbox" className="rounded form-checkbox h-5 w-5" />
          </div>
        </div>
      ))}
    </>
  );
};
