import { create } from "zustand";

interface ISearchState {
  search: string;
  setSearch: (search: string) => void;
  sortOrder: number;
  setSortOrder: (sortOrder: number) => void;
  page: number;
  setPage: (page: number) => void;
}
const useSearchStore = create<ISearchState>((set) => ({
  search: "",
  setSearch: (search: string) => set({ search }),
  sortOrder: -1,
  setSortOrder: (sortOrder: number) => set({ sortOrder }),
  page: 1,
  setPage: (page: number) => set({ page }),
}));

export default useSearchStore;
