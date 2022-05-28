import { DragEvent, FC, useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";
import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./";
import { EntriesContext } from "../entries";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
  };

  return (
    <div onDrop={onDropEntry} onDragOver={allowDrop}>
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflowY: "auto",
          background: "transparent",
          padding: "1px 5px",
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
