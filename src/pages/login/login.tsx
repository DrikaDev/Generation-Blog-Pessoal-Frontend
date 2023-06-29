import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/Actions";

function Login() {
  let navigate = useNavigate();
  //não utilizar o let history = useHistory()

  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: "",
    senha: "",
    token: "",
  });

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
    //console.log(JSON.stringify(userLogin));
  };

  useEffect(() => {
    if (token != "") {
      dispatch(addToken(token))
      navigate("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    //console.log('userLogin:' + Object.values(userLogin));

    try {
      await login(`/usuarios/logar`, userLogin, setToken);
      alert("Usuário logado com sucesso!");
    } catch (error) {
      alert("Dados do usuário incorretos!");
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos"
            >
              Entrar
            </Typography>

            <TextField
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="Email"
              label="Email do usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />

            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="senha"
              label="Senha com 8 dígitos"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />

            <Box marginTop={2} textAlign="center">     
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#eab715" }}
                >
                  Logar
                </Button>
            </Box>
          </form>

          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to={"/cadastro"}>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="textos"
              >
                Cadastre-se aqui.
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>

      <Grid xs={6} className="imagemLogin"></Grid>
    </Grid>
  );
}

export default Login;