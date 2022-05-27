import type { NextPage } from "next";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Layout } from "../components/layout";
import { EntryList } from "../context/ui";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendentes" />

            <CardContent>
              <EntryList />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Em Progresso" />

            <CardContent>
              <EntryList />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" />

            <CardContent>
              <EntryList />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
