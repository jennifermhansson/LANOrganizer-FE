import { create } from "zustand";

export interface AppState {
  view: "home" | "gamelist";
}

export interface Actions {
  setView: (view: AppState["view"]) => void;
}

const useStore = create<AppState & Actions>((set) => ({
  view: "home",
  setView: (view: AppState["view"]) => set({ view }),
}));

export default useStore;
