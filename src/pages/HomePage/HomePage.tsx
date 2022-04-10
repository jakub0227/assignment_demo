import { FC } from "react";
import { Card } from "../../components/Card/Card";
import { useStore } from "../../zustand/store";

export const HomePage: FC = () => {
  const data = useStore((state) => state.data);
  const store = useStore();
  const total = data.length;
  const activeSelect = data.filter((el) => el.is_unread === true);

  const onLoad = () => {
    fetch(
      "https://raw.githubusercontent.com/jakub0227/mockup_data/main/data.json"
    )
      .then((res) => res.json())
      .then((data) => store.loadData(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="sm: px-10">
      <h1 className="text-3xl mt-10 text-zinc-100">Items Total: {total}</h1>
      <h1 className="text-3xl my-5 text-slate-200">
        Active: {activeSelect.length}
      </h1>
      <button
        className="bg-red-500 text-white font-semibold py-2 px-5 text-sm inline-flex items-center group rounded-3xl"
        onClick={onLoad}
      >
        Load Data
      </button>
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
    </div>
  );
};
