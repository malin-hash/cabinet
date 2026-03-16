import React, { useState, useEffect } from "react";
import { AiFillSetting, AiOutlineMenu, AiOutlineMessage } from "react-icons/ai";
import RdvPage from "./Rdv/RdvPage";
import Sidebar from "./Sidebar";
import { getNumber } from "../../../Apis/axios";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Header() {
  // Route de déconnexion
  const nav = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    nav("/");
  };

  const [number, setNumber] = useState([]);
  const fetchNumberRdv = async () => {
    try {
      const res = await getNumber();
      setNumber(res.data.rdvs);
    } catch {
      setNumber("0");
    }
  };

  useEffect(() => {
    fetchNumberRdv();
  }, []);
  // Modal rendez-vous
  const [openRdv, setOpenRdv] = useState(false);
  const closeRdv = () => setOpenRdv(!openRdv);
  // Modal Sidebar
  const [openSidebar, setOpenSidebar] = useState(false);
  const closeSidebar = () => setOpenSidebar(!openSidebar);
  return (
    <div className="px-8 flex justify-between bg-blue-700 shadow-sm left-0 top-0 right-0 fixed z-30">
      <div className="p-2 flex items-center">
        <img src="/public/justice.png" alt="" className="h-14 w-28  " />
        <div>
          <p className="text-white sm:text-xs md:sm font-mono">
            PABINGUI <span className="text-yellow-600">&</span> Associés
          </p>
          <p className="text-white text-xs font-thin text-center -mt-1">
            Justise - Défense - Droit
          </p>
        </div>
      </div>
      <div className="flex space-x-3">
        <div className="flex space-x-3 p-2 items-center text-white">
          <div className="relative">
            <AiOutlineMessage
              onClick={closeRdv}
              className="text-2xl cursor-pointer hover:text-slate-300 transition-colors duration-300"
            />
            {openRdv && <RdvPage closeRdv={closeRdv} />}
            <div className="px-2 py-1 text-xs rounded-t-full rounded-l-full  bg-red-600 text-white absolute -top-3 right-5">
              {number}
            </div>
          </div>
          <div onClick={() => logout()}>
            <MdLogout className="text-xl hidden md:block hover:text-red-600 cursor-pointer transition-colors duration-300" />
          </div>
          <div className="md:hidden block">
            <AiOutlineMenu
              onClick={closeSidebar}
              className="text-2xl cursor-pointer hover:text-slate-300 transition-colors duration-300"
            />
          </div>
        </div>
        {openSidebar && (
          <div className="transition-all duration-1000 md:hidden block">
            <Sidebar openSidebar={openSidebar} closeSidebar={closeSidebar} />
          </div>
        )}
      </div>
    </div>
  );
}
