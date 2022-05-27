import type { NextPage } from "next";
import { Card, CardHeader, Grid } from "@mui/material";
import { Layout } from "../components/layout";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendentes" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Em Progresso" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
