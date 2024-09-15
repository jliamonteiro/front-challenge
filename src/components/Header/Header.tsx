import { Link } from "react-router-dom";
import Ajuda from "./assets/ajuda.svg";
import Funcionalidade from "./assets/feed.svg";
import Logo from "./assets/logo.png";
import Logout from "./assets/logout.svg";
import Sobre from "./assets/sobre.svg";

export default function Header() {
    return (
        <header className="flex bg-fundoheader items-center justify-center md:justify-center h-24 lg:h-32">
            <div className="flex items-center gap-7 md:w-full md:justify-evenly">
                <img src={Logo} className="w-20 md:w-32 lg:w-44" />
                <Link to="/Ajuda" className="group">
                    <img src={Ajuda} alt="" className="w-9/12 lg:w-14 md:hover:scale-105 md:active:scale-95 duration-300" />
                    <p className="hidden absolute bg-white text-black p-1 rounded-lg z-10 lg:group-hover:block lg:ml-8 text-xl">Ajuda</p>
                </Link>
                <Link to="/Funcionalidade" className="group">
                    <img src={Funcionalidade} alt="" className="w-9/12 lg:w-12 md:hover:scale-105 md:active:scale-95 duration-300" />
                    <p className="hidden absolute bg-white text-black p-1 rounded-lg z-10 lg:group-hover:block lg:mt-1 lg:ml-8 text-xl">Funcionalidade</p>
                </Link>
                <Link to="/Sobre" className="group relative">
                    <img src={Sobre} alt="" className="w-9/12 lg:w-12 md:hover:scale-105 md:active:scale-95 duration-300" />
                    <p className="hidden absolute bg-white text-black p-1 rounded-lg z-10 lg:group-hover:block lg:mt-1 lg:ml-8 text-xl">Sobre</p>
                </Link>
                <Link to="/" className="group relative">
                    <img src={Logout} alt="" className="w-9/12 lg:w-12 md:hover:scale-105 md:active:scale-95 duration-300" />
                    <p className="hidden absolute bg-white text-black p-1 rounded-lg z-10 lg:group-hover:block lg:mt-1 lg:ml-8 text-xl">Sair</p>
                </Link>
            </div>
        </header>
    );
}
