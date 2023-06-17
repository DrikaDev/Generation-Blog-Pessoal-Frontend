import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form action="">
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
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />

            <TextField
              id="senha"
              label="senha com 8 dígitos"
              variant="outlined"
              name="senha"
              margin="normal"
              fullWidth
            />

            <Box marginTop={2} textAlign="center">
              <Link to="/home" className="text-decorator-none">
                <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: "#eab715" }}>
                  Logar
                </Button>
              </Link>
            </Box>
          </form>

          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              gutterBottom
              align="center"
              className="textos"
            >
              Cadastre-se aqui.
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid
        xs={6}
        className="imagem"
      ></Grid>
    </Grid>
  );
}

export default Login;