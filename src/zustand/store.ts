import create from "zustand";
import { ListItem } from "../types/ListItem";

interface StoreStateProps {
  data: ListItem[];
  toggleCheckBox: (id: number) => void;
}

export const useStore = create<StoreStateProps>((set) => ({
  data: [
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
  ],
  toggleCheckBox: (id) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.id === id
          ? ({ ...item, is_unread: !item.is_unread } as ListItem)
          : item
      ),
    })),
}));
