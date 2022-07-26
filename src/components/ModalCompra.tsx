import React, { useState, useEffect } from "react";

function ModalCompra() {
  const [ativo, setAtivo] = useState(true);

  return (
    <>
      {ativo ? (
        <div>
          <div className="w-screen h-screen bg-slate-700 opacity-70 absolute top-0 left-0 z-1"></div>
          <div className="absolute z-10 top-56 w-4/5 h-fit py-5 px-3 bg-white rounded-3xl border-2 ">
            <div className="block justify-center">
              <div className="font-bold text-lg font-sans text-center">
                Registrar <b className="text-[#34E3A9] font-sans">Compra</b> de
                Ativo
              </div>
              <div className="bg-gray-200 w-full ">
                <input
                  className="bg-gray-200 text-base font-sans text-center"
                  type="text"
                />
                <label>Ativo</label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
}

export default ModalCompra;
