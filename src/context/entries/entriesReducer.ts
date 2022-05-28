import { Entry } from "../../interfaces";
import { EntriesState } from "./";

type EntriesactionType = { type: "[Entry] - Add-Entry"; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesactionType
): EntriesState => {
  switch (action.type) {
    case "[Entry] - Add-Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
      break;
    default:
      return state;
  }
};
