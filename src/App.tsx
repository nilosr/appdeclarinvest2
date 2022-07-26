import React, { useEffect, useState } from "react";

interface Data {
  NomeAtivo?: String;
  DataCompra?: string;
  DataVenda?: string;
  PrecoCompra?: number;
  PrecoVenda?: number;
  QuantCompra?: number;
  QuantVenda?: number;
}

function App() {
  const [ativo1, setAtivo1] = useState<Data>();
  const [ativo2, setAtivo2] = useState<Data>();
  const [ativo3, setAtivo3] = useState<Data>();
  const [ativo4, setAtivo4] = useState<Data>();
  const [ativo5, setAtivo5] = useState<Data>();
  const [hasAtivo1, setHasAtivo1] = useState(false);
  const [hasAtivo2, setHasAtivo2] = useState(false);
  const [hasAtivo3, setHasAtivo3] = useState(false);
  const [hasAtivo4, setHasAtivo4] = useState(false);
  const [hasAtivo5, setHasAtivo5] = useState(false);
  const [modalCompra, setModalCompra] = useState(false);
  const [successCompra, setSuccessCompra] = useState(false);
  const [aux, setAux] = useState<Data>();

  const [totalInvestido, setTotalInvestido] = useState(0);
  const [cart, setCart] = useState(false);

  function SaveData(data: Data) {
    if (!hasAtivo1) {
      setAtivo1({
        NomeAtivo: data.NomeAtivo,
        DataCompra: data.DataCompra,
        DataVenda: data.DataVenda,
        PrecoCompra: data.PrecoCompra,
        PrecoVenda: data.PrecoVenda,
        QuantCompra: data.QuantCompra,
        QuantVenda: data.QuantVenda,
      });
      setHasAtivo1(true);
      resetAux();
      return;
    }
    if (!hasAtivo2) {
      setAtivo2({
        NomeAtivo: data.NomeAtivo,
        DataCompra: data.DataCompra,
        DataVenda: data.DataVenda,
        PrecoCompra: data.PrecoCompra,
        PrecoVenda: data.PrecoVenda,
        QuantCompra: data.QuantCompra,
        QuantVenda: data.QuantVenda,
      });
      setHasAtivo2(true);
      resetAux();
      return;
    }
    if (!hasAtivo3) {
      setAtivo3({
        NomeAtivo: data.NomeAtivo,
        DataCompra: data.DataCompra,
        DataVenda: data.DataVenda,
        PrecoCompra: data.PrecoCompra,
        PrecoVenda: data.PrecoVenda,
        QuantCompra: data.QuantCompra,
        QuantVenda: data.QuantVenda,
      });
      setHasAtivo3(true);
      resetAux();
      return;
    }
    if (!hasAtivo4) {
      setAtivo4({
        NomeAtivo: data.NomeAtivo,
        DataCompra: data.DataCompra,
        DataVenda: data.DataVenda,
        PrecoCompra: data.PrecoCompra,
        PrecoVenda: data.PrecoVenda,
        QuantCompra: data.QuantCompra,
        QuantVenda: data.QuantVenda,
      });
      setHasAtivo4(true);
      resetAux();
      return;
    }
    if (!hasAtivo5) {
      setAtivo5({
        NomeAtivo: data.NomeAtivo,
        DataCompra: data.DataCompra,
        DataVenda: data.DataVenda,
        PrecoCompra: data.PrecoCompra,
        PrecoVenda: data.PrecoVenda,
        QuantCompra: data.QuantCompra,
        QuantVenda: data.QuantVenda,
      });
      setHasAtivo5(true);
      resetAux();
      return;
    } else {
      console.log("número máximo de ativos atingido");
    }
  }
  function resetAux() {
    setAux({
      NomeAtivo: "",
      DataCompra: "",
      DataVenda: "",
      PrecoCompra: 0,
      PrecoVenda: 0,
      QuantCompra: 0,
      QuantVenda: 0,
    });
  }

  function fillAux() {
    setAux({
      NomeAtivo: "aaa",
      DataCompra: "aa1",
      DataVenda: "a11",
      PrecoCompra: 1,
      PrecoVenda: 11,
      QuantCompra: 111,
      QuantVenda: 1111,
    });
  }

  /*   useEffect(() => {
    setAtivo1({ NomeAtivo: "asddasd" });
    setHasAtivo1(false);
  }, []); */
  useEffect(() => {
    console.log(aux);
  }, [aux]);

  return (
    <>
      <div className=" w-screen pb-16">
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
              {hasAtivo1 ? (
                <div className="border-[1px] border-gray-700 flex  rounded-sm bg-blue-200 mx-5">
                  <div className="w-1/2 text-center font-semibold text-sm">
                    {ativo1?.NomeAtivo}
                  </div>
                  <div className="w-1/2 text-center font-semibold text-sm"></div>
                </div>
              ) : (
                <div />
              )}
              {hasAtivo2 ? (
                <div className="border-[1px] border-gray-700 flex  rounded-sm bg-blue-200 mx-5">
                  <div className="w-1/2 text-center font-semibold text-sm">
                    {ativo2?.NomeAtivo}
                  </div>
                  <div className="w-1/2 text-center font-semibold text-sm"></div>
                </div>
              ) : (
                <div />
              )}
              {hasAtivo3 ? (
                <div className="border-[1px] border-gray-700 flex  rounded-sm bg-blue-200 mx-5">
                  <div className="w-1/2 text-center font-semibold text-sm">
                    {ativo3?.NomeAtivo}
                  </div>
                  <div className="w-1/2 text-center font-semibold text-sm"></div>
                </div>
              ) : (
                <div />
              )}
              {hasAtivo4 ? (
                <div className="border-[1px] border-gray-700 flex  rounded-sm bg-blue-200 mx-5">
                  <div className="w-1/2 text-center font-semibold text-sm">
                    {ativo4?.NomeAtivo}
                  </div>
                  <div className="w-1/2 text-center font-semibold text-sm"></div>
                </div>
              ) : (
                <div />
              )}
              {hasAtivo5 ? (
                <div className="border-[1px] border-gray-700 flex  rounded-sm bg-blue-200 mx-5">
                  <div className="w-1/2 text-center font-semibold text-sm">
                    {ativo5?.NomeAtivo}
                  </div>
                  <div className="w-1/2 text-center font-semibold text-sm"></div>
                </div>
              ) : (
                <div />
              )}
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
          <button
            className="bg-[#34E3A9] rounded-lg w-28 h-9 text-xl shadow-md items-center text-gray-800 font-semibold"
            onClick={() => setModalCompra(!modalCompra)}
          >
            Compra
          </button>
          <button className="bg-red-600 rounded-lg w-28 h-9 text-xl shadow-md items-center text-white font-semibold">
            Venda
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
            {/*<button className="bg-blue-800 rounded-lg w-full h-10 text-xl shadow-md items-center text-white font-semibold">
              Baixar PDF
            </button> */}
          </div>
        </div>
        <div className="bg-gray-800 w-screen text-white text-center font-semibold font-mono py-2 fixed bottom-0 ">
          Desenvolvido por Nilosr
        </div>
      </div>
      {modalCompra ? (
        <div>
          <div
            className="w-screen h-screen bg-slate-700 opacity-70 absolute top-0 left-0 z-1"
            onClick={() => setModalCompra(!modalCompra)}
          ></div>
          <div className=" z-10  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-fit py-5 px-3 bg-white rounded-3xl border-2 ">
            <div className="block justify-center">
              <div className="font-bold text-lg font-sans text-center">
                Registrar <b className="text-[#34E3A9] font-sans">Compra</b> de
                Ativo
              </div>
              <div className="bg-transparent w-full font-semibold mt-1 ">
                <label>Ativo: </label>
                <input
                  className="bg-transparent text-base font-sans text-center"
                  type="text"
                />
              </div>
              <div className="bg-transparent w-full font-semibold mt-1 ">
                <label>Quantidade: </label>
                <input
                  className="bg-transparent text-base font-sans text-center"
                  type="text"
                />
              </div>
              <div className="bg-transparent w-full font-semibold mt-1 ">
                <label>Preço por cota: </label>
                <input
                  className="bg-transparent text-base font-sans text-center"
                  type="text"
                />
              </div>
              <div className="bg-transparent w-full font-semibold mt-1 ">
                <label>Data de compra: </label>
                <input
                  className="bg-transparent text-base font-sans text-center"
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <button
                className=" bg-[#34E3A9] rounded-lg w-28 h-9 text-xl shadow-md items-center text-white font-semibold"
                onClick={() => {
                  setSuccessCompra(true);
                  setModalCompra(!modalCompra);
                  fillAux();
                  /* SaveData(aux); */
                }}
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
      {successCompra ? (
        <div>
          <div
            className="w-screen h-screen bg-slate-700 opacity-70 absolute top-0 left-0 z-1"
            onClick={() => setSuccessCompra(!successCompra)}
          />
          <div className=" z-10 absolute top-1/2 left-1/2 transform text-center -translate-x-1/2 -translate-y-1/2 w-4/5 h-fit py-5 px-3 bg-[#34E3A9] rounded-3xl border-2 ">
            <div className="font-bold text-[#5C5C5C] text-3xl">
              Compra registrada com sucesso!
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
