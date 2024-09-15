
import "./style.css";

export default function Footer() {
  return (
    <footer className="w-full bg-footer">
      <div className="flex flex-wrap text-cinza">
        <div className="w-full py-2 px-4 lg:w-1/2">
          <h2 className="text-base md:text-lg font-semibold uppercase pl-4">Contato</h2>
          <div className="box relative mx-auto py-2 px-4 mt-4">
            <h3>Para n</h3>
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
          <h2 className="text-base md:text-lg font-semibold uppercase pl-4">Endereço</h2>
          <div className="box relative mx-auto py-2 px-4 mt-4">
            <div className="mt-4">
              <p className="font-semibold text-informacoes text-sm lg:text-xl mt-4">R EMILIA MARENGO, 451 - VILA REGENTE FEIJO - SAO PAULO</p>
              <p className="font-semibold text-informacoes text-sm lg:text-xl mt-4">+333 76786</p>
              <p className="font-semibold text-informacoes text-sm lg:text-xl mt-4 break-words">prevencao.cartoes@portoseguro.com.br</p>
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
