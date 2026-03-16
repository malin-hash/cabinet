import React, { useState, useEffect } from "react";
import {
  AiFillAccountBook,
  AiFillFileExcel,
  AiFillFolderAdd,
  AiFillProfile,
  AiOutlineCalendar,
  AiOutlineFolder,
  AiOutlineFolderAdd,
  AiOutlineMenu,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { getMe } from "../../../Apis/axios";
export default function Navbar() {
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    try {
      const res = await getMe();
      setUser(res.data);
    } catch (error) {
      console.error("Erreur de recupération:", error.response?.data);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="py-2 px-6 mt-16 left-0 top-0 right-0 fixed z-20 bg-blue-100 mb-2 md:block hidden border-4 border-b-2 border-b-blue-600 border-r-red-500 border-l-yellow-500">
      <div className="flex space-x-10 mb-4 mt-3">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive
              ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-4"
              : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"
          }
        >
          <AiOutlineMenu className="text-lg" />
          <p className="text-sm">Acceuil</p>
        </NavLink>
        <NavLink
          to="/admin/client"
          className={({ isActive }) =>
            isActive
              ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-4"
              : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"
          }
        >
          <AiOutlineUser className="text-lg hover:text-blue-600 " />
          <p className="text-sm">Clients</p>
        </NavLink>
        {user == null ? (
          ""
        ) : user.is_admin == true ? (
          <NavLink
            to="/admin/dossier"
            className={({ isActive }) =>
              isActive
                ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-4"
                : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"
            }
          >
            <AiOutlineFolderAdd className="text-lg hover:text-blue-600 " />
            <p className="text-sm">Dossiers</p>
          </NavLink>
        ) : (
          ""
        )}

        <NavLink
          to="/admin/archive"
          className={({ isActive }) =>
            isActive
              ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-4"
              : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"
          }
        >
          <AiOutlineFolder className="text-lg hover:text-blue-600 " />
          <p className="text-sm">Archive</p>
        </NavLink>
        <NavLink
          to="/admin/document"
          className={({ isActive }) =>
            isActive
              ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-4"
              : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"
          }
        >
          <AiFillFolderAdd className="text-lg hover:text-blue-600 " />
          <p className="text-sm">Document</p>
        </NavLink>
        <NavLink
          to="/admin/facture"
          className={({ isActive }) =>
            isActive
              ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-4"
              : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"
          }
        >
          <AiFillFileExcel className="text-lg hover:text-blue-600 " />
          <p className="text-sm">Honoraire</p>
        </NavLink>
        {user == null ? (
          ""
        ) : user.is_admin == true ? (
          <NavLink
            to="/admin/register"
            className={({ isActive }) =>
              isActive
                ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-4"
                : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"
            }
          >
            <AiOutlineUserAdd className="text-lg hover:text-blue-600 " />
            <p className="text-sm">Utilisateurs</p>
          </NavLink>
        ) : (
          ""
        )}
        <NavLink
          to="/admin/profile"
          className={({ isActive }) =>
            isActive
              ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-4"
              : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"
          }
        >
          <AiFillProfile className="text-lg hover:text-blue-600 " />
          <p className="text-sm">Profile</p>
        </NavLink>
        <NavLink
          to="/admin/note"
          className={({ isActive }) =>
            isActive
              ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-4"
              : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"
          }
        >
          <AiFillAccountBook className="text-lg hover:text-blue-600 " />
          <p className="text-sm">Bloc Notes</p>
        </NavLink>
      </div>
      {/* <p className="text-xl font-bold">Menu</p> */}
    </div>
  );
}
