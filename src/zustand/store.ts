import create from "zustand";
import { ListItem } from "../types/ListItem";

interface StoreStateProps {
  data: ListItem[];
  loadData: (data: ListItem[]) => void;
  toggleCheckBox: (id: number) => void;
}

export const useStore = create<StoreStateProps>((set) => ({
  data: [],
  loadData: (data) =>
    set((state) => ({
      ...state,
      data,
    })),
  toggleCheckBox: (id) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.id === id
          ? ({ ...item, is_unread: !item.is_unread } as ListItem)
          : item
      ),
    })),
}));
