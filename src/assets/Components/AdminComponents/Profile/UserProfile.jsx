import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import { getMe } from "../../../../Apis/axios";
export default function UserProfile() {
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

  if (!user) return <p>Chargement ...</p>;
  return (
    <div className="px-10 py-5 flex gap-2">
      <div className="bg-white p-4 w-auto">
        <div className="flex gap-2">
          <div className="flex justify-center p-1 bg-gray-200 rounded-md text-6xl">
            <img
              src={user.genre == "Masculin" ? "/erph.png" : "/erpfemme.png"}
              alt=""
              className="h-28 w-24"
            />
          </div>
          <div className="flex-col text-sm text-justify space-y-3">
            <p>
              <span className="font-bold">Nom</span> : {user.name}
            </p>
            <p>
              <span className="font-bold">Prénom</span> : {user.firstname}
            </p>
            <p>
              <span className="font-bold">Email</span> : {user.email}
            </p>
            <p>
              <span className="font-bold">Téléphone</span> : (236){" "}
              {user.phoneNumber}
            </p>
          </div>
        </div>
        <div className="mt-4 text-sm">
          <h1 className="text-blue-600 text-center font-bold mb-4">
            Autres Personnelles
          </h1>
          <div className="flex gap-6">
            <div>
              <p>
                <span className="font-bold">Fonction</span> : {user.function}
              </p>
              <p>
                <span className="font-bold">Sexe</span> : {user.genre}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Nationalité</span> :{" "}
                {user.nationality}
              </p>
              <p>
                <span className="font-bold">Adresse</span> : {user.address}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-slate-200/50 shadow-xl">
        <section className="flex justify-between py-3 px-10">
          <NavLink
            to="/admin/profile"
            end
            className={({ isActive }) =>
              isActive
                ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-2"
                : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"
            }
          >
            Modifier vos Informations
          </NavLink>
          <NavLink
            to="/admin/profile/modify"
            className={({ isActive }) =>
              isActive
                ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-2"
                : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"
            }
          >
            Modifier votre mot de passe
          </NavLink>
        </section>
        <div className="p-2">
          <Outlet user={user} />
        </div>
      </div>
    </div>
  );
}
