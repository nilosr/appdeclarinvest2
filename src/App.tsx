import React, { useEffect, useState } from "react";
/* import { BotaoVender } from "./components/BotaoVender";
 */
function App() {
  const [totalInvestido, setTotalInvestido] = useState(0);
  const [cart, setCart] = useState(false);
  return (
    <>
      <div className=" w-screen">
        {cart ? (
          <div>
            <div className="flex items-center justify-evenly mt-5 mb-10">
              <div className="text-2xl font-semibold">DeclarInvest</div>
              {/* TODO:Icone carteira*/}
              <button
                className="rounded-full px-7 py-7 bg-red-500"
                onClick={() => setCart(!cart)}
              />
            </div>
            <div className="bg-blue-200 py-2">
              <div className="text-lg  w-screen flex  ">
                <div className="w-1/4" />
                <div className="font-medium text-gray-600">Total Investido</div>
              </div>
              <div className="text-2xl flex justify-center text-blue-600 font-bold">
                R$: {totalInvestido}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-full flex justify-center mt-5">
              <button
                className="rounded-full px-7 py-7 bg-red-500 self-center"
                onClick={() => setCart(!cart)}
              />
            </div>
            <div className="w-full text-center text-2xl font-semibold text-gray-800">
              Minha Carteira
            </div>
            <div className="mt-2 space-y-1">
              <div className="border-[1px] border-gray-700 flex  rounded-sm bg-blue-200 mx-5">
                <div className="w-1/2 text-center font-semibold text-sm">
                  Ativo
                </div>
                <div className="w-1/2 text-center font-semibold text-sm">
                  Quantidade
                </div>
              </div>
              <div className="border-[1px] border-gray-700 flex  rounded-sm bg-blue-200 mx-5">
                <div className="w-1/2 text-center font-semibold text-sm">
                  BBSA3
                </div>
                <div className="w-1/2 text-center font-semibold text-sm">
                  32
                </div>
              </div>
            </div>
            <div
              className="w-full flex justify-center text-red-500 font-bold hover:cursor-pointer"
              onClick={() => setCart(!cart)}
            >
              voltar
            </div>
          </div>
        )}

        <div className="mt-7 flex justify-center items-center">
          <div className="px-4 w-1/3 flex justify-end">
            {/* TODO:Icone sino */}
            <div className="rounded-full w-4 h-4 bg-gray-500"></div>
          </div>
          <div className="text-xl font-semibold text-gray-800">Anotar</div>
          <div className=" w-1/3"></div>
        </div>
        <div className="flex justify-evenly mt-4">
          {" "}
          <button className="bg-green-400 rounded-lg w-28 h-9 text-xl shadow-md items-center text-gray-800 font-semibold">
            Compra
          </button>
          <button className="bg-red-600 rounded-lg w-28 h-9 text-xl shadow-md items-center text-white font-semibold">
            Compra
          </button>
        </div>
        <div className="mt-7 flex justify-center items-center ">
          <div className="w-1/3 px-4 flex justify-end">
            {/* TODO:Icone papel */}
            <div className="rounded-full w-4 h-4 bg-gray-500"></div>
          </div>
          <div className="text-xl font-semibold text-gray-800">Relatório</div>
          <div className="w-1/3"></div>
        </div>
        <div className="flex justify-center">
          <div className="block space-y-5 mt-4 w-3/5">
            {/* TODO:Icones baixar */}
            <button className="bg-blue-400 rounded-lg w-full h-10 text-xl shadow-md items-center text-white font-semibold">
              Baixar csv
            </button>
            <button className="bg-blue-800 rounded-lg w-full h-10 text-xl shadow-md items-center text-white font-semibold">
              Baixar PDF
            </button>
          </div>
        </div>
        <div className="bg-gray-800 w-screen text-white text-center font-semibold font-mono bottom-0 py-2 absolute ">
          Desenvolvido por Nilosr
        </div>
      </div>
    </>
  );
}

export default App;
