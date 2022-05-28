import { FC, useReducer } from "react";
import { UIContext, UIReducer } from "./";

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
};

interface Props {
  children: JSX.Element;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: "UI - Set isAddEntry", payload: isAdding });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,

        openSideMenu,
        closeSideMenu,

        setIsAddingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
