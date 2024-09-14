import { Route, Routes } from "react-router-dom";
import Equipe from "./pages/Equipe/Equipe";
import FuncionalidadePagina from "./pages/Funcionalidade/FuncionalidadePagina";
import AdicionarCarro from "./pages/Adicionar-Carro/Adicionar-Carro";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CadastroLogin from "./pages/Cadastro/CadastroLogin";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<CadastroLogin />} />
            <Route path="/Funcionalidade" element={<FuncionalidadePagina />} />
            <Route path="/Sobre" element={<Equipe />} />
            <Route path="/AdicionarCarro" element={<AdicionarCarro/>} />
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default MainRoutes;