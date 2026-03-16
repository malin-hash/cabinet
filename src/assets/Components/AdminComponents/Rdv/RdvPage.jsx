import React, { useEffect, useState } from "react";
import { getRdv, deleteRdv, updateRdv } from "../../../../Apis/axios";
import { MdCheck, MdClose } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function RdvPage({ closeRdv }) {
  const navigate = useNavigate();
  const [rdvs, setRdvs] = useState([]);
  const [rdvdelete, setRdvdelete] = useState([]);
  const [message, setMessage] = useState("");

  const fetchRdv = async () => {
    try {
      const res = await getRdv();
      setRdvs(res.data);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Aucun rendez-vous en cours ..."
      );
    }
  };

  useEffect(() => {
    fetchRdv();
  }, []);

  const rdvDelete = async (id) => {
    window.confirm("voulez-vous Supprimer ce rendez-vous ?");
    await deleteRdv(id);
    fetchRdv();
    navigate(0);
    setRdvdelete("Le rendez-vous est bien supprimé.");
    return setRdvs((prev) => prev.filter((t) => t.id != id));
  };
  const rdvUpdate = async (id) => {
    window.confirm(
      "voulez-vous vraiment mettre ce rendez-vous comme déjà honoré ?"
    );
    await updateRdv(id);
    fetchRdv();
    navigate(0);
    setRdvdelete("Ce rendez-vous est Honoré.");
    return setRdvs((prev) => prev.filter((t) => t.id != id));
  };
  return (
    <div className="p-10 bg-slate-200 rounded-lg  -top-8 left-0 right-0 lg:mx-72 mx-5 mt-28 fixed z-50 shadow-2xl overflow-y-auto max-h-[80vh]">
      <div className="flex space-x-5 justify-between">
        <p className="text-center text-blue-600 mb-5">Tous les rendez-vous</p>
        {rdvdelete && <p className="text-bold text-green-600">{rdvdelete}</p>}
        <MdClose
          onClick={closeRdv}
          className="cursor-pointer p-2 bg-red-300 hover:bg-red-400 rounded-full text-3xl text-red-500 hover:text-red-700 font-bold duration-300 transition-colors"
        />
      </div>
      {rdvs == "" && (
        <p className="text-bold text-red-600">Aucun Rendez-vous en cours ...</p>
      )}

      {rdvs.map((rd) => (
        <div key={rd.id} className="">
          <div className="flex justify-between hover:bg-white cursor-pointer md:p-3 p-1">
            {/* <p className='md:p-2 p-1 flex items-center text-center rounded-lg bg-green-600 text-white text-xs mb-1'>n° : {rd.id}</p>
             */}
            <div className="flex space-x-2">
              <FaUser className="p-2 bg-yellow-300 hover:bg-yellow-400 rounded-full md:text-5xl text-4xl text-red-500 hover:text-red-700 font-bold duration-300 transition-colors" />
              <div className="space-y-1">
                <p className="text-sm text-purple-700">Nom : {rd.nom}</p>
                <p className="text-xs text-black">Prénom : {rd.prenom}</p>
              </div>
            </div>
            <div className="mb-2 space-y-1">
              <p className="text-xs text-green-700 font-bold">{rd.date}</p>
              <p className="text-xs text-yellow-500 font-bold">
                {rd.heureDebut}
              </p>
            </div>
            <div className="space-y-2">
              <MdClose
                onClick={() => rdvDelete(rd.id)}
                className="p-1 bg-red-300 hover:bg-red-400 rounded-full text-md text-red-500 hover:text-red-700  duration-300 transition-colors"
              />
              <MdCheck
                onClick={() => rdvUpdate(rd.id)}
                className="p-1 bg-green-300 hover:bg-green-400 rounded-full  text-md text-green-500 hover:text-green-700  duration-300 transition-colors"
              />
            </div>
          </div>
          <hr className="border border-gray-400" />
        </div>
      ))}
    </div>
  );
}
