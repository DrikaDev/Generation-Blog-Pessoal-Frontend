import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import { busca, buscaId, post, put } from "../../../services/Service";
import Postagem from "../../../models/Postagem";
import Tema from "../../../models/Tema";
import "./CadastroPost.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";

function CadastroPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Tema[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      //alert("Você precisa estar logado");
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

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    tema: null,
  });

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
    });
  }, [tema]);

  useEffect(() => {
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagem, {
      headers: {
        Authorizatio: token,
      },
    });
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      put(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      //alert ("Postagem atualizada com sucesso!")
      toast.success("Postagem atualizada com sucesso!", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      post(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      //alert ("Postagem cadastrada com sucesso!")
      toast.success("Postagem cadastrada com sucesso!", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    back();
  }

  function back() {
    navigate("/postagens");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h4"
          color="textSecondary"
          component="h4"
          align="center"
        >
          Cadastre aqui seu post novo
        </Typography>

        <TextField
          value={postagem.titulo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="titulo"
          label="Digite aqui o título do post"
          name="titulo"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          value={postagem.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="texto"
          label="Digite aqui seu post"
          name="texto"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">Tema</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper-label"
            onChange={(e) =>
              buscaId(`/temas/${e.target.value}`, setTema, {
                headers: {
                  Authorization: token,
                },
              })
            }
          >
            {temas.map((tema) => (
              <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
            ))}
          </Select>

          <FormHelperText>Escolha um tema para a postagem</FormHelperText>

          <Button type="submit" variant="contained" color="primary" 
          style={{ backgroundColor: "#eab715" }}>
            Finalizar
          </Button>
          
        </FormControl>
      </form>
    </Container>
  );
}

export default CadastroPost;
