import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { busca } from "../../../services/Service";
import { toast } from "react-toastify";
import Tema from "../../../models/Tema";
import "./ListaTema.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";

function ListaTema() {
  const dispatch = useDispatch();
  const [temas, setTemas] = useState<Tema[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      //alert ("Você precisa estar logado!")
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
      dispatch(addToken(token));
      navigate("/login");
    }
  }, [token]);

  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getTema();
  }, [temas.length]);

  return (
    <>
      {temas.map((tema) => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h5">
                {tema.descricao}
              </Typography>
            </CardContent>

            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/cadastrarTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                      style={{ backgroundColor: "#eab715" }}
                    >
                      Atualizar
                    </Button>
                  </Box>
                </Link>

                <Link
                  to={`/deletarTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      style={{ backgroundColor: "gray" }}
                    >
                      Deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaTema;
