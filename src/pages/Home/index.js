import React from "react";
import { Header, Produtos } from "../../components";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import useStyle from "./styles";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import BoltIcon from "@mui/icons-material/Bolt";
import tenis from "../../images/tenis.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",

  padding: theme.spacing(1),
  boxShadow: "none",
  textAlign: "left",
  color: theme.palette.text.secondary,
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(15),
  },
}));

const Home = () => {
  const classes = useStyle();

  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item lg={6}>
            <Item>
              <Typography color="black" variant="h2" className={classes.Titulo}>
                Encontre o par dos seus sonhos
              </Typography>
              <Typography variant="body1" sx={{ mb: 5 }}>
                Encontre seus sapatos em nossas várias coleções, aqui os sapatos
                são infinitos e os lucros também são infinitos.
              </Typography>
              <Button
                size="large"
                variant="contained"
                sx={{ textTransform: "inherit", background: "#7186b0" }}
              >
                Ver produtos
              </Button>
            </Item>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Box component="img" src={tenis} className={classes.Tenis}></Box>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item lg={4}>
            <Item sx={{ display: "flex", alignItems: "center" }}>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: "#7186b0" }} variant="rounded">
                  <VerifiedUserOutlinedIcon />
                </Avatar>
              </Stack>
              <Typography variant="h6" sx={{ color: "black", pl: 1 }}>
                Pagamento seguro
              </Typography>
            </Item>
          </Grid>
          <Grid item lg={4}>
            <Item sx={{ display: "flex", alignItems: "center" }}>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: "#7186b0" }} variant="rounded">
                  <AccessTimeIcon />
                </Avatar>
              </Stack>
              <Typography variant="h6" sx={{ color: "black", pl: 1 }}>
                Suporte 24h
              </Typography>
            </Item>
          </Grid>
          <Grid item lg={4}>
            <Item sx={{ display: "flex", alignItems: "center" }}>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: "#7186b0" }} variant="rounded">
                  <BoltIcon />
                </Avatar>
              </Stack>
              <Typography variant="h6" sx={{ color: "black", pl: 1 }}>
                Entrega rápida
              </Typography>
            </Item>
          </Grid>
          <Produtos></Produtos>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
