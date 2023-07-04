import React, { useEffect } from "react";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import { Grid, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
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
              <h1>Que bom que você veio!</h1>
              <p>O lugar certo para trocas de idéias de mães pra mães</p>
            </Typography>
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