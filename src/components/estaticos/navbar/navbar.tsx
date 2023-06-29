import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    alert("Usuário deslogado.");
    navigate("/login");
  }

  //renderização condicional da Navbar:
  var navbarComponent;
  if (token != "") {
    navbarComponent = (
      <AppBar position="static" style={{ backgroundColor: "#eab715" }}>
        <Toolbar variant="dense">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              BlogPessoal-DrikaDev
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Link to={"/home"} className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
            </Link>

            <Link to={"/postagens"} className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>
            </Link>

            <Link to={"/temas"} className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
            </Link>

            <Link to={"/cadastrarTema"} className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Cadastrar Temas
                </Typography>
              </Box>
            </Link>

            <Box
              mx={1}
              className="cursor"
              onClick={goLogout}
              style={{ color: "white" }}
            >
              <Typography variant="h6" color="inherit">
                Logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;