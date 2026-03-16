import React, { useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaClosedCaptioning, FaPrint } from "react-icons/fa6";
export default function DocumentsModalPrint({ closeModalPrint, dataPrint }) {
  const prinRef = useRef();
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed z-50 bg-white w-full h-screen p-1 top-0 left-0 right-0">
      <div className="py-1 px-16 flex justify-between">
        <AiFillCloseCircle
          onClick={() => closeModalPrint()}
          className="text-red-500 hover:text-red-600 text-2xl cursor-pointer"
        />
        <div className="mb-2">
          <p className="text-xl font-semibold">
            Ce document appartient au dossier n° :{" "}
            {dataPrint.folder.numero_dossier}
          </p>
        </div>
        {dataPrint.mimetype != "application/pdf" && (
          <div
            onClick={handlePrint}
            className="text-blue-600 py-2 px-4 flex space-x-2 rounded-md cursor-pointer bg-white hover:bg-slate-400 duration-300 transition-colors"
          >
            <FaPrint className="mt-1" />
            <p>Imprimer</p>
          </div>
        )}
      </div>
      {dataPrint.mimetype == "application/pdf" ? (
        <section>
          <iframe
            src={`http://localhost:5000/doc/${dataPrint.id}/view`}
            width="100%"
            height="600"
          ></iframe>
        </section>
      ) : (
        <section
          ref={prinRef}
          id="print-section"
          className="flex justify-center p-2 bg-gray-200 h-screen overflow-auto items-center"
        >
          <img
            className="w-80 h-96"
            src={`http://localhost:5000/doc/${dataPrint.id}/view`}
            alt=""
          />
        </section>
      )}
    </div>
  );
}
