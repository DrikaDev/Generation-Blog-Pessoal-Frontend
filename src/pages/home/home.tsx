import React, { useEffect } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/MoldaPostagem";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Style } from "@mui/icons-material";

function Home() {

  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');

  useEffect(() => {
    if (token == ""){
      alert ("Você precisa estar loga!")
      navigate ("/login")
    }
  }, [token])

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        
      >
        <Grid alignItems="center" item xs={6}>
          <Box padding={13}>
            
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Seja bem vinde ao meu Blog!
            </Typography>

            <Box display="flex" justifyContent="center">
              <Box marginRight={1}>
                <ModalPostagem />
              </Box>
              <Button
                variant="outlined"
                className="botao"
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

        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;