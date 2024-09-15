import { Route, Routes } from "react-router-dom";
import Equipe from "./pages/Equipe/Equipe";
import FuncionalidadePagina from "./pages/Funcionalidade/FuncionalidadePagina";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CadastroLogin from "./pages/Cadastro/CadastroLogin";
import Ajuda from "./pages/Ajuda/Ajuda";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<CadastroLogin />} />
            <Route path="/Funcionalidade" element={<FuncionalidadePagina />} />
            <Route path="/Sobre" element={<Equipe />} />
            <Route path="/Ajuda" element={<Ajuda/>} />
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default MainRoutes;