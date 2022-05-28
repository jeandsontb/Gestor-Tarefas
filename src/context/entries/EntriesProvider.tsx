import { FC, useReducer } from "react";
import { v4 as uuidV4 } from "uuid";

import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const UI_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidV4(),
      description: "Pendente: Task for includes funcionalits in application",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidV4(),
      description: "In-Progress Task for tables  in application",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidV4(),
      description: "Terminadas: Task for create modals in application",
      status: "finish",
      createdAt: Date.now() - 10000,
    },
  ],
};

interface Props {
  children: JSX.Element;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, UI_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidV4(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "[Entry] - Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] - Entry-Update", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
