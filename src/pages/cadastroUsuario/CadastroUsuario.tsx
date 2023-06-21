import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cadastroUsuario } from "../../services/Service";
import User from "../../models/User";
import "./CadastroUsuario.css";

function CadastroUsuario() {
    let navigate = useNavigate();
    //não utilizar o let history = useHistory()
  
    const [confirmarSenha, setConfirmarSenha] = useState<String>("");
    const [user, setUser] = useState<User>({
      id: 0,
      nome: "",
      usuario: "",
      senha: ""
    });

    const [userResult, setUserResult] = useState<User>({
      id: 0,
      nome: "",
      usuario: "",
      senha: ""
    });
  
    useEffect(() => {
      if (userResult.id != 0) {
        navigate("/login");
      }
    }, [userResult]);

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
      setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>){
      setUser({
        ...user,
        [e.target.name]: e.target.value
      })
    }
  
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
      if(confirmarSenha == user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert ("Usuário cadastrado com sucesso!")
      }else{
        alert ("Dados incorretos, favor verificar!")
      }
    }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} className="imagemCadastro"></Grid>
        <Grid item xs={6} alignItems="center">
          <Box paddingX={10}>
          <form onSubmit={onSubmit}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="textos2"
              >
                Cadastre-se
              </Typography>

              <TextField
                value={user.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="nome"
                label="nome"
                variant="outlined"
                name="nome"
                margin="normal"
                fullWidth
              />

              <TextField
                value={user.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="email"
                label="email"
                variant="outlined"
                name="usuario"
                margin="normal"
                fullWidth
              />

              <TextField
                value={user.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="senha"
                label="senha com 8 dígitos"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                fullWidth
              />

              <TextField
                value={confirmarSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                id="confirmar senha"
                label="confirme senha com 8 dígitos"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                fullWidth
              />

              <Box marginTop={2} textAlign="center">
                <Link to="/login">
                  <Button
                    className="btnCancelar"
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: "black" }}
                  >
                    Cancelar
                  </Button>
                </Link>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#eab715" }}
                >
                  Cadastrar
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default CadastroUsuario;
