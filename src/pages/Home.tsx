import React from "react";
import "./home.css";
import { Paper, Button, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "#eab715" }}
      >
        <Grid alignItems="center" item xs={6}>
          <Box padding={13}>
            
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Seja bem vinde ao meu Blog!
            </Typography>

            <Box display="flex" justifyContent="center">
              <Box marginRight={1}></Box>
              <Button
                variant="outlined"
                style={{
                  borderColor: "white",
                  backgroundColor: "#eab715",
                  color: "white",
                }}
              >
                Ver Postagens
              </Button>
            </Box>

          </Box>
        </Grid>

        <Grid item xs={6}>
          <img
            src="https://img.freepik.com/vetores-premium/bla-bla-padrao-sem-emenda-de-letras-a-mao-com-baloes-de-fala-amarelos-buzz-concept-chat_511660-391.jpg?w=996"
            alt="Foto com muitos blablablas"
            style={{ width: "550px", borderRadius: "20px" }}
          />
        </Grid>

        <Grid xs={12} style={{ backgroundColor: "white" }}></Grid>
      </Grid>
    </>
  );
}

export default Home;
