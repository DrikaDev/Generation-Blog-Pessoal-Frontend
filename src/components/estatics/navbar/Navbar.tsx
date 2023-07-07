import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";
import { toast } from "react-toastify";
import "./navbar.css";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    // alert("Usuário deslogado.");
    toast.info("Usuário deslogado!", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/login");
  }

  //renderização condicional da Navbar:
  var navbarComponent;
  if (token != "") {
    navbarComponent = (
      <AppBar position="static" style={{ backgroundColor: "#eab715" }}>
        <Toolbar variant="dense" className="box-navbar">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              Blog de Mãe pra Mãe
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

            <Link to={"/formularioPostagem"} className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Cadastrar Post
                </Typography>
              </Box>
            </Link>

            <Link to={"/postagens"} className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Ver Posts
                </Typography>
              </Box>
            </Link>

            <Link to={"/formularioTema"} className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Cadastrar Tema
                </Typography>
              </Box>
            </Link>

            <Link to={"/temas"} className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Ver Temas
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
                Sair
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
