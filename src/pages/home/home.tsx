import React, { useEffect } from "react";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/MoldaPostagem";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import Mulheres from '../../assets/Women_talking_1.gif'
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      //alert("Você precisa estar logado!");
      toast.error("Você precisa estar logado!", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/login");
    }
  }, [token]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="box-bemvinde"
      >
        <Grid alignItems="center" item xs={6}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              <h1>Seja bem vinde ao meu Blog!</h1>
              <p>Um lugar para trocas de idéias de mães pra mães</p>
            </Typography>

            <Box display="flex" justifyContent="center">
              <Box marginRight={1}>
                <ModalPostagem />
              </Box>
              <Link to={"/postagens"} className="text-decorator-none">
                <Button variant="outlined" className="botao">
                  Ver Postagens
                </Button>
              </Link>
            </Box>
          
        </Grid>

        <Grid item xs={6} className="img-mulheres">
          <img
            src={Mulheres}
            alt="Foto com mulheres conversando"
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
