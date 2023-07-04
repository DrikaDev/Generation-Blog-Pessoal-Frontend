import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import CadastroUsuario from "./pages/cadastroUsuario/CadastroUsuario";
import CadastroPost from "./components/postagens/cadastroPostagem/CadastroPost";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import ListaPost from "./components/postagens/listapostagem/ListaPost";
import ListaTema from "./components/temas/listaTema/ListaTema";
import DeletaPost from "./components/postagens/deletaPostagem/DeletaPost";
import DeletaTema from "./components/temas/deletaTema/DeletaTema";
import store from "./store/Store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />

        <div style={{ minHeight: "70vh" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/postagens" element={<ListaPost />} />

            <Route path="/formularioPostagem" element={<CadastroPost />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
            <Route path="/deletarPostagem/:id" element={<DeletaPost />} />

            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarTema" element={<DeletaTema />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;