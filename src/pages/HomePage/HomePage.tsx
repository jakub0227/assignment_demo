import React, { FC } from "react";
import { Card } from "../../components/Card/Card";
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
        <Card
          key={el.id}
          id={el.id}
          from={el.from}
          sent_date={el.sent_date}
          is_unread={el.is_unread}
          subject={el.subject}
          snippet={el.snippet}
        />
      ))}
    </>
  );
};
