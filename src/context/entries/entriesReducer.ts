import { EntriesState } from "./";

type EntriesactionType = { type: "[entries] - action name" };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesactionType
): EntriesState => {
  switch (action.type) {
    // case "UI - Open Sidebar":
    //   return {
    //     ...state,
    //     sidemenuOpen: true,
    //   };
    //   break;
    default:
      return state;
  }
};
