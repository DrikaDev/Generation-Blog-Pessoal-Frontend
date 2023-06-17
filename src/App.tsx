import Navbar from "./components/estaticos/navbar/navbar";
import Footer from "./components/estaticos/footer/footer";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // tudo que vai ser renderizado na tela
    <BrowserRouter>
      <Navbar />

      <div style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
