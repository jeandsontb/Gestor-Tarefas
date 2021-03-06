import { ChangeEvent, useState, useContext } from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { EntriesContext } from "../entries/EntriesContext";
import { UIContext } from "./UIContext";

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const [inputTask, setInputTask] = useState("");
  const [touched, setTouched] = useState(false);

  const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTask(event.target.value);
  };

  const handleSaveTask = () => {
    if (inputTask.length === 0) return;

    addNewEntry(inputTask);
    setInputTask("");
    setTouched(false);
    setIsAddingEntry(false);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{
              marginTop: 2,
              marginBottom: 1,
            }}
            placeholder="Nova entrada"
            autoFocus
            multiline
            label="Nova entrada"
            helperText={inputTask.length <= 0 && touched && "Digite um valor"}
            error={inputTask.length <= 0 && touched}
            value={inputTask}
            onChange={onTextFieldChanges}
            onBlur={() => setTouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="text"
              onClick={() => [
                setIsAddingEntry(false),
                setTouched(false),
                setInputTask(""),
              ]}
            >
              Cancelar
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={handleSaveTask}
            >
              Salvar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlineOutlinedIcon />}
          fullWidth
          variant="outlined"
          sx={{ marginTop: 2 }}
          onClick={() => setIsAddingEntry(true)}
        >
          Adicionar tarefa
        </Button>
      )}
    </Box>
  );
};
