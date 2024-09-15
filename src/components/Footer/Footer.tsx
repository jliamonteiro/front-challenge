import Linkedin from "./assets/linkedin.svg";
import Facebook from "./assets/facebook.svg";
import Instagram from "./assets/instagram.svg";
import Logo from "./assets/logo.png";
import "./style.css";

export default function Footer() {
  return (
    <footer className="w-full bg-footer">
      <div className="flex flex-wrap text-cinza">
        <div className="w-full py-2 px-4 lg:w-1/2">
          <h2 className="text-base md:text-lg font-semibold uppercase pl-4">Contate-nos</h2>
          <div className="box relative mx-auto py-2 px-4 mt-4">
            <h3 className="font-medium">Entre em contato conosco preenchendo o formulário abaixo e retornaremos o mais breve possível!</h3>
            <form action="#">
              <div className="mt-4 flex flex-col">
                <label className="font-semibold text-cinzalabel pb-1.5 text-lg lg:text-xl">Nome</label>
                <input className="w-full pl-2 text-lg text-preencherinput bg-fundoinput border-2 border-bordainput outline-none h-8" type="text" required />
              </div>
              <div className="mt-4 flex flex-col">
                <label className="font-semibold text-cinzalabel pb-1.5 text-xl lg:text-xl">E-mail</label>
                <input className="w-full pl-2 text-lg text-preencherinput bg-fundoinput border-2 border-bordainput outline-none h-8" type="email" required />
              </div>
              <div className="mt-4 flex flex-col">
                <label className="font-semibold text-cinzalabel pb-1.5 text-lg lg:text-xl">Mensagem (explique seu problema)</label>
                <textarea className="w-full pl-2 pt-1 text-preencherinput bg-fundoinput border-2 border-bordainput outline-none text-lg" rows={2} required></textarea>
              </div>
              <div className="mt-4 flex justify-center">
                <button className="lg:w-1/4 border-0 outline-none bg-azul text-branco p-3 rounded-lg font-medium text-lg cursor-pointer transition duration-300" type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full py-2 px-4 lg:w-1/2">
          <h2 className="text-base md:text-lg font-semibold uppercase pl-4">Redes sociais</h2>
          <div className="box relative mx-auto py-2 px-4 mt-4">
            <img src={Logo} className="h-12 my-6" />
            <p className="font-bold text-lg">Acompanhe a Porto nas redes sociais</p>
            <div className="mt-4 flex gap-32 justify-center">
              <a href="https://www.linkedin.com/company/porto" className="flex lg:hover:bg-slate-400" target="_blank"><img src={Linkedin} className="h-12 m-2"/></a>
              <a href="https://www.facebook.com/porto" className="flex lg:hover:bg-slate-400" target="_blank"><img src={Facebook} className="h-12 m-2"/></a>
              <a href="https://www.instagram.com/porto/" className="flex lg:hover:bg-slate-400" target="_blank"><img src={Instagram} className="h-12 m-2"/></a>     
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center p-2 text-xs bg-fundoinput">
          <span className="credit text-creditos">
            Criado por Descomplica Auto{" "}
            |{" "}
          </span>
          <span className="text-creditos"> ® 2024. Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
}
