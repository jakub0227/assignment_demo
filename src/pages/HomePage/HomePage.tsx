import React, { FC } from "react";
import { Card } from "../../components/Card/Card";
import { useStore } from "../../zustand/store";

export const HomePage: FC = () => {
  const data = useStore((state) => state.data);
  const total = data.length;

  return (
    <>
      <h1 className="text-4xl mt-10 text-zinc-100">Items Total: {total}</h1>
      {data.map((el) => (
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
