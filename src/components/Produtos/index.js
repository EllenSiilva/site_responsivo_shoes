import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import tenis from "../../images/tenis.jpg";
import useStyle from "./styles";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  
    padding: theme.spacing(1),
    boxShadow: "none",
    textAlign: "center",
    color: theme.palette.text.secondary,
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(15),
    },
}));

export default function Produtos() {
    const classes = useStyle();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h3" textAlign="center">
        Nossa coleção
      </Typography>
      <Grid container spacing={0}>
        <Grid item lg={4} xs={4} md={8}>
          <Item>
          <Box component="img" src={tenis} className={classes.Tenis}></Box>

            Nike Air Max
            <Typography color="primary" variant="h6" sx={{ fontWeight: "bold" }}>
              R$800,00
            </Typography>
          </Item>
        </Grid>
        <Grid item lg={4} xs={4} md={4}>
          <Item>
          <Box component="img" src={tenis} className={classes.Tenis}></Box>

            Nike Air Max
            <Typography color="primary" variant="h6" sx={{ fontWeight: "bold" }}>
              R$800,00
            </Typography>
          </Item>{" "}
        </Grid>
        <Grid item lg={4} xs={4} md={4}>
          <Item>
          <Box component="img" src={tenis} className={classes.Tenis}></Box>

            Nike Air Max
            <Typography color="primary" variant="h6" sx={{ fontWeight: "bold" }}>
              R$800,00
            </Typography>
          </Item>{" "}
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item lg={4} xs={4} md={8}>
          <Item>
          <Box component="img" src={tenis} className={classes.Tenis}></Box>

            Nike Air Max
            <Typography color="primary" variant="h6" sx={{ fontWeight: "bold" }}>
              R$800,00
            </Typography>
          </Item>
        </Grid>
        <Grid item lg={4} xs={4} md={4}>
          <Item>
          <Box component="img" src={tenis} className={classes.Tenis}></Box>

            Nike Air Max
            <Typography color="primary" variant="h6" sx={{ fontWeight: "bold" }}>
              R$800,00
            </Typography>
          </Item>{" "}
        </Grid>
        <Grid item lg={4} xs={4} md={4}>
          <Item>
          <Box component="img" src={tenis} className={classes.Tenis}></Box>

            Nike Air Max
            <Typography color="primary" variant="h6" sx={{ fontWeight: "bold" }}>
              R$800,00
            </Typography>
          </Item>{" "}
        </Grid>
      </Grid>
    </Box>
  );
}
