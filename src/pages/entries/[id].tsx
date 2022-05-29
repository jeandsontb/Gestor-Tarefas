import { ChangeEvent, FC, useMemo, useState, useContext } from "react";
import { GetServerSideProps } from "next";
import {
  capitalize,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  IconButton,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

import { Layout } from "../../components/layout";
import { Entry, EntryStatus } from "../../interfaces";
import { dbEntries } from "../../database";
import { EntriesContext } from "../../context/entries";

interface Props {
  entry: Entry;
}

const EntryPage: FC<Props> = ({ entry }) => {
  const validStatus: EntryStatus[] = ["pending", "in-progress", "finish"];

  const [taskValue, setTaskValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);

  const { updateEntry } = useContext(EntriesContext);

  const verifyForm = useMemo(
    () => taskValue.length <= 0 && touched,
    [taskValue, touched]
  );

  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskValue(event.target.value);
  };

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const handleSaveTask = () => {
    if (taskValue.trim().length === 0) return;

    const updatedEntry: Entry = {
      ...entry,
      status,
      description: taskValue,
    };

    updateEntry(updatedEntry, true);
  };

  return (
    <Layout title={taskValue.substring(0, 20) + " ..."}>
      <>
        <Grid container justifyContent="center" sx={{ marginTop: "2px" }}>
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <CardHeader
                title={`Entrada:`}
                subheader={`Criada em: ${entry.createdAt} minutos`}
              />

              <CardContent>
                <TextField
                  sx={{ marginTop: 2, marginBottom: 1 }}
                  fullWidth
                  placeholder="Nova entrada"
                  autoFocus
                  multiline
                  label="Nova entrada"
                  value={taskValue}
                  onChange={onTextFieldChange}
                  onBlur={() => setTouched(true)}
                  helperText={verifyForm && "Informe uma tarefa"}
                  error={verifyForm}
                />
              </CardContent>

              <FormControl sx={{ padding: "0px 15px" }}>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChange}>
                  {validStatus.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={capitalize(option)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              <CardActions>
                <Button
                  startIcon={<SaveOutlinedIcon />}
                  variant="contained"
                  fullWidth
                  onClick={handleSaveTask}
                  disabled={taskValue.length <= 0}
                >
                  Salvar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <IconButton
          sx={{
            position: "fixed",
            bottom: 30,
            right: 30,
            backgroundColor: "error.dark",
          }}
        >
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </>
    </Layout>
  );
};

export default EntryPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params as { id: string };

  const entry = await dbEntries.getEntryById(id);

  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      entry,
    },
  };
};
