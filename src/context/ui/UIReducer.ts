import { UIState } from "./UIProvider";

type UIActionType =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" }
  | { type: "UI - Set isAddEntry"; payload: boolean };

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        sidemenuOpen: true,
      };
      break;
    case "UI - Close Sidebar":
      return {
        ...state,
        sidemenuOpen: false,
      };
      break;
    case "UI - Set isAddEntry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };
      break;
    default:
      return state;
  }
};
