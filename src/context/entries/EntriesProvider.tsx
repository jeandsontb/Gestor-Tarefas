import { FC, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: [];
}

const UI_INITIAL_STATE: EntriesState = {
  entries: [],
};

interface Props {
  children: JSX.Element;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, UI_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        entries: [],
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
