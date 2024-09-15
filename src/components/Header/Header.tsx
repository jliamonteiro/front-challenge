import { Link } from "react-router-dom";
import Ajuda from "./assets/ajuda.svg";
import Funcionalidade from "./assets/feed.svg";
import Logo from "./assets/logo.png";
import Logout from "./assets/logout.svg";
import Sobre from "./assets/sobre.svg";

export default function Header() {
    return (
        <header className="flex bg-azulclaro items-center justify-center md:justify-center h-24 lg:h-32">
            <div className="flex items-center gap-7 md:w-full md:justify-evenly">
                <img src={Logo} className="w-20 md:w-32 lg:w-44" />
                <Link to="/Ajuda" className="group">
                    <img src={Ajuda} alt="" className="w-9/12 lg:hidden" />
                    <p className="hidden text-white lg:block text-2xl lg:hover:text-azulescuro">Ajuda</p>
                </Link>
                <Link to="/Funcionalidade" className="group">
                    <img src={Funcionalidade} alt="" className="w-9/12 lg:hidden" />
                    <p className="hidden text-white lg:block text-2xl lg:hover:text-azulescuro">Funcionalidade</p>
                </Link>
                <Link to="/Sobre" className="group relative">
                    <img src={Sobre} alt="" className="w-9/12 lg:hidden" />
                    <p className="hidden text-white lg:block text-2xl lg:hover:text-azulescuro">Sobre</p>
                </Link>
                <Link to="/" className="group relative">
                    <img src={Logout} alt="" className="w-9/12 lg:hidden" />
                    <p className="hidden text-white lg:block text-2xl lg:hover:text-azulescuro">Sair</p>
                </Link>
            </div>
        </header>
    );
}
