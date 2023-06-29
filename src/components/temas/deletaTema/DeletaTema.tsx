import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardContent, Typography } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import './DeletaTema.css'
import { toast } from 'react-toastify';

function DeletaTema(){
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage("token");
    const [tema, setTema] = useState<Tema>();
  
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
        navigate("/login")
      }
    }, [token]);
  
    useEffect(() => {
      if (id !== undefined) findById(id);
    }, [id]);
  
    async function findById(id: string) {
      buscaId(`/tema/${id}`, setTema, {
        headers: {
          Authorization: token,
        },
      });
    }

    function sim(){
        navigate('/temas')
        deleteId(`/tema/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        //alert("Tema deletado com sucesso!");
        toast.success("Tema deletado com sucesso!", {
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

    function nao(){
        navigate('/temas')
    }

    return (
        <>
        <Box m={2}>
            <Card variant='outlined'>

                <CardContent>
                    <Box justifyContent='center'>
                        <Typography color='textSecondary' gutterBottom>
                            Deletar o Tema?
                        </Typography>
                        <Typography color='textSecondary'>
                            {tema?.descricao}
                        </Typography>
                    </Box>
                </CardContent>

                <CardContent>
                    <Box display='flex' justifyContent='start' ml={1.0} mb={2}>
                        <Box mx={2}>
                            <Button onClick={sim} variant='contained' className='marginLeft' size='large' color='primary'>
                                Sim
                            </Button>
                        </Box>
                        <Box mx={2}>
                            <Button onClick={nao} variant='contained' size='large' color='primary'>
                                Não
                            </Button>
                        </Box>
                    </Box>
                </CardContent>

            </Card>   
        </Box>
        </>
    )
}

export default DeletaTema;