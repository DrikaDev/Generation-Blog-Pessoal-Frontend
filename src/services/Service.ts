import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const login = async (url: any, dados: any, setDado: any) => {
  const resposta = await api.post(url, dados);
  setDado(resposta.data.token);
};

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
  const resposta = await api.post(url, dados);
  setDado(resposta.data);
};

export const busca = async (url: any, setDado: any, header: any) => {
  const resposta = await api.get(url, header);
  setDado(resposta.data);
};

export const buscaId = async (url: any, setDado: any, header: any) => {
  const resposta = await api.get(url, header);
  setDado(resposta.data);
};

export const post = async (url: any, dados: any, setDado: any, header: any) => {
  const resposta = await api.post(url, dados, header);
  setDado(resposta.data);
};

export const put = async (url: any, dados: any, setDado: any, header: any) => {
  const resposta = await api.put(url, dados, header);
  setDado(resposta.data);
};

export const deleteId = async (url: any, header: any) => {
  //não precisa ser const pq não armazena mais informação - ele apenas envia a rota com o id da postagem e do tema
  await api.delete(url, header);
};