// Login.tsx
import React from 'react';
import Logo from "./assets/logo.png";
import Google from "./assets/google.png";
import Facebook from "./assets/facebook.png";
import Apple from "./assets/apple.png";
import Senha from "./assets/lock.svg";
import Email from "./assets/mail.svg";

export default function Login({
    email, setEmail, password, setPassword, errors, onSubmit, onRegisterClick
}: {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    errors: { email?: string; password?: string };
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onRegisterClick: () => void;
}) {
    return (
        <section className="my-8 w-11/12 lg:flex items-center justify-center z-10 lg:w-full lg:flex-grow lg:ml-2 lg:my-0 desktop-only">
            <form action="#" className='h-full bg-branco flex items-center flex-col px-4 text-center drop-shadow-lg rounded-lg flex-grow' onSubmit={onSubmit}>
                <div className="w-full flex justify-end">
                    <img src={Logo} alt="Logo da Descomplica Auto" className='h-10 mb-6 mt-8'/>
                </div>
                <h1 className="text-6xl mt-6 lg:mt-20 font-bold text-azulclaro m-0 md:text-7xl lg:text-8xl">Login</h1>
                <ul className="flex list-none my-10 gap-7 md:gap-24 lg:my-9">
                    <li><a href="#"><img src={Google} className="cursor-pointer w-12 md:w-14 lg:w-16" alt="Ícone do Google" /></a></li>
                    <li><a href="#"><img src={Facebook} className="cursor-pointer w-12 md:w-14 lg:w-16" alt="Ícone do Facebook" /></a></li>
                    <li><a href="#"><img src={Apple} className="cursor-pointer w-12 md:w-14 lg:w-16" alt="Ícone da Apple" /></a></li>
                </ul>
                <div className="flex flex-col gap-5 mt-1">
                    <div className="bg-cinza flex items-center gap-2.5 pl-2.5 rounded-xl">
                        <img src={Email}/>
                        <input
                            className={`border-none outline-none w-11/12 h-16 bg-transparent pl-2.5 text-3xl font-light lg:text-4xl text-preto ${errors.email ? 'border-red-500' : ''}`}
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                    <div className="bg-cinza flex items-center gap-2.5 pl-2.5 rounded-xl">
                        <img src={Senha} />
                        <input
                            className={`border-none outline-none w-full h-16 bg-transparent pl-2.5 text-3xl font-light lg:text-4xl text-preto ${errors.password ? 'border-red-500' : ''}`}
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>
                <div className="mt-8">
                    <button type="submit" className="bg-azulescuro p-6 text-branco font-bold text-2xl rounded-3xl md:text-3xl md:px-12 lg:text-4xl">Entrar</button>
                </div>
                <div className="mt-6">
                    <button type="button" className="text-azulclaro font-bold text-xl lg:hidden" onClick={onRegisterClick}>Criar conta</button>
                </div>
            </form>
        </section>
    );
}
