import create from "zustand";

type SearchState = {
	searchInput: string;
	updateSearchState: (T: string) => void;
};
const useSearchStore = create<SearchState>((set) => ({
	searchInput: "",
	updateSearchState: (value) => set(() => ({ searchInput: value })),
}));

export default useSearchStore;
