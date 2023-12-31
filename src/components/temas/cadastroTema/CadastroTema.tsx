import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import { buscaId, post, put } from "../../../services/Service";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";
import Tema from "../../../models/Tema";
import "./CadastroTema.css";

function CadastroTema() {
  //construção da comunicação com o Back-end:
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

  useEffect(() => {
    if (token == "") {
      //alert("Você precisa estar logado")
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
      dispatch(addToken(token))
      navigate("/login")
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) findById(id);
  }, [id]);

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("tema " + JSON.stringify(tema))

    if(id !== undefined){
        console.log(tema)
        put(`/temas`, tema, setTema, {
            headers: {
                'Authorization': token
            }
        })
        //alert ("Tema atualizado com sucesso!");
        toast.success("Tema atualizado com sucesso!", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
    }else{
        post(`/temas`, tema, setTema, {
            headers: {
                'Authorization': token
            }
        })
        //alert ("Tema cadastrado com sucesso!")
        toast.success("Tema cadastrado com sucesso!", {
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
    //voltar
    back()
  }

  function back(){
    navigate("/temas")
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
          Cadastre aqui seu tema novo
        </Typography>

        <TextField
          value={tema.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
          id="descricao"
          label="Nome do tema"
          name="descricao"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <Button type="submit" variant="contained" color="primary"
        style={{ backgroundColor: "#eab715" }}>
          Finalizar
        </Button>
        
      </form>
    </Container>
  );
}

export default CadastroTema;