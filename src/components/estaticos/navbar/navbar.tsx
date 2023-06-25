import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./navbar.css";

function Navbar() {
  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  function goLogout() {
    setToken("");
    alert("Usuário deslogado.");
    navigate("/login");
  }

  return (
    <>
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

            <Box mx={1} className='cursor' onClick={goLogout} style={{ color: "white" }}>
              <Typography variant="h6" color="inherit">Logout</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
