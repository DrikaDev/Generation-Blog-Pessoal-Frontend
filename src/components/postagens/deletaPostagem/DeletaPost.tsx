import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardContent, Typography } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import './DeletaPost.css'
import { buscaId, deleteId } from '../../../services/Service';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';

function DeletaPostagem(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    const [post, setPost] = useState<Postagem>();
  
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
      buscaId(`/postagens/${id}`, setPost, {
        headers: {
          Authorization: token,
        },
      });
    }

    function sim(){
        navigate('/postagens')
        deleteId(`/postagens/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        //alert("Post deletado com sucesso!");
        toast.success("Post deletado com sucesso!", {
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
        navigate('/postagens')
    }

    return (
        <>
        <Box m={2}>
            <Card variant='outlined'>
                <CardContent>
                    <Box justifyContent='center'>
                        <Typography color='textSecondary' gutterBottom>
                            Deletar a Postagem?
                        </Typography>
                        <Typography color='textSecondary'>
                            {post?.titulo}
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
                        <Box>
                            <Button onClick={nao} variant='contained' size='large' color='secondary'>
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

export default DeletaPostagem;