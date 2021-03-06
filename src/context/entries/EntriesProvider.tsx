import { FC, useEffect, useReducer } from "react";
import { useSnackbar } from "notistack";

import { entriesApi } from "../../apis";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const UI_INITIAL_STATE: EntriesState = {
  entries: [],
};

interface Props {
  children: JSX.Element;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, UI_INITIAL_STATE);

  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", { description });

    dispatch({ type: "[Entry] - Add-Entry", payload: data });
  };

  const updateEntry = async (entry: Entry, showSnackBar = false) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`, {
        description: entry.description,
        status: entry.status,
      });
      dispatch({ type: "[Entry] - Entry-Update", payload: data });

      if (showSnackBar) {
        enqueueSnackbar("Tarefa atualizada", {
          variant: "success",
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
    } catch (err) {
      console.log({ err });
    }
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");

    dispatch({ type: "[Entry] - Refresh-Data", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

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
