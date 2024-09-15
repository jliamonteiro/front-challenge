import React from 'react';
import Senha from "./assets/lock.svg";
import Logo from "./assets/logo.png";
import Email from "./assets/mail.svg";
import Phone from "./assets/phone.svg";
import User from "./assets/user.svg";

export default function Cadastro({
    name, setName, email, setEmail, phone, setPhone, password, setPassword, errors, onSubmit, onLoginClick
}: {
    name: string;
    setName: (name: string) => void;
    email: string;
    setEmail: (email: string) => void;
    phone: string;
    setPhone: (phone: string) => void;
    password: string;
    setPassword: (password: string) => void;
    errors: { name?: string; email?: string; phone?: string; password?: string };
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onLoginClick: () => void;
}) {
    return (
        <section className="my-8 w-11/12 lg:flex items-center justify-center z-10 lg:w-full lg:flex-grow lg:my-0">
            <form action="#" className='h-full bg-branco flex items-center flex-col px-4 text-center drop-shadow-lg rounded-lg flex-grow' onSubmit={onSubmit}>
                <div className="w-full flex justify-end mt-8">
                    <img src={Logo} alt="Logo da Descomplica Auto" className='h-10 mb-6 mt-8' />
                </div>
                <h1 className='text-4xl mt-2 lg:my-10 font-bold text-azulclaro m-0 md:text-6xl lg:text-7xl'>Cadastro</h1>
                <div className="flex flex-col gap-2 mt-5">
                    <div className="bg-cinza flex items-center gap-2.5 pl-2.5 rounded-xl">
                        <img src={User} />
                        <input
                            className={`border-none outline-none w-11/12 h-16 bg-transparent pl-2.5 text-2xl font-light lg:text-4xl text-preto ${errors.name ? 'border-red-500' : ''}`}
                            type="text"
                            placeholder="Nome Completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                    <div className="bg-cinza flex items-center gap-2.5 pl-2.5 rounded-xl">
                        <img src={Email} />
                        <input
                            className={`border-none outline-none w-11/12 h-16 bg-transparent pl-2.5 text-2xl font-light lg:text-4xl text-preto ${errors.email ? 'border-red-500' : ''}`}
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                    <div className="bg-cinza flex items-center gap-2.5 pl-2.5 rounded-xl">
                        <img src={Phone} />
                        <input
                            className={`border-none outline-none w-11/12 h-16 bg-transparent pl-2.5 text-2xl font-light lg:text-4xl text-preto ${errors.phone ? 'border-red-500' : ''}`}
                            type="text"
                            placeholder="Telefone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                    <div className="bg-cinza flex items-center gap-2.5 pl-2.5 rounded-xl">
                        <img src={Senha} />
                        <input
                            className={`border-none outline-none w-full h-16 bg-transparent pl-2.5 text-2xl font-light lg:text-4xl text-preto ${errors.password ? 'border-red-500' : ''}`}
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>
                <div className="mt-5">
                    <button type="submit" className="bg-azulescuro p-6 text-branco font-bold text-2xl rounded-3xl md:text-3xl md:px-12 lg:text-4xl">Cadastrar</button>
                </div>
                <div className="mt-5">
                    <button type="button" className="text-azulclaro font-bold text-xl lg:hidden" onClick={onLoginClick}>Já tenho conta</button>
                </div>
            </form>
        </section>
    );
}
