import React, { useState, useEffect } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaEnvelope, FaFile, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { rdv } from "../../../Apis/axios";
import { getAffaire } from "../../../Apis/axios";

export default function Rdv() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    date: "",
    heureDebut: "",
    subject: "",
    affaire_id: "",
  });
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState("");
  const [loading, setLoading] = useState(false);
  const [affs, setAffaire] = useState([]);

  // Get function
  const handleSelectAll = async () => {
    try {
      const res = await getAffaire();
      setAffaire(res.data);
    } catch {
      setMessage("");
    }
  };
  useEffect(() => {
    handleSelectAll();
  }, []);
  // Function submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formData == "") {
      return setMessage("Veuillez remplir tous les champs");
    }
    try {
      const res = await rdv(formData);
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        date: "",
        heureDebut: "",
        subject: "",
        affaire_id: "",
      });
      setMessages(res.data.message);
      setMessage("");
    } catch (err) {
      setMessage(err.response?.data?.message || "Erreur d'ajout");
      setMessages("");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-6 bg-blue-50">
      <h1 className="text-center text-gray-700 md:text-2xl text-xl mb-3">
        Prendre Rendez-vous
      </h1>
      <p className="text-center text-gray-500 md:text-md text-sm mb-6">
        Réservez votre consultation gratuite de 30 minutes avec l'un de nos
        avocats spécialisés
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-3 gap-2">
        <div className="p-5 bg-white shadow-lg rounded-lg">
          <h1 className="text-center text-md md:text-lg text-gray-600">
            Réservez votre consultation
          </h1>
          {message && (
            <div className="text-md sm:text-sm m-1 p-3 w-full bg-red-300 text-center rounded-lg text-black">
              {message}
            </div>
          )}
          {messages && (
            <div className="text-md sm:text-sm m-1 p-3 w-full bg-green-300 text-center rounded-lg text-black">
              {messages}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
              <div>
                <label className="text-sm text-gray-500" htmlFor="">
                  Nom <span className="text-red-600">*</span>
                </label>
                <input
                  value={formData.nom}
                  type="text"
                  className="w-full p-2 border-2 border-black rounded-lg"
                  placeholder="Exemple: malin"
                  onChange={(e) =>
                    setFormData({ ...formData, nom: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-sm text-gray-500" htmlFor="">
                  Prénom <span className="text-red-600">*</span>
                </label>
                <input
                  value={formData.prenom}
                  type="text"
                  className="w-full p-2 border-2 border-black rounded-lg"
                  placeholder="Exemple: mokos"
                  onChange={(e) =>
                    setFormData({ ...formData, prenom: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
              <div>
                <label className="text-sm text-gray-500" htmlFor="">
                  E-mail <span className="text-red-600">*</span>
                </label>
                <input
                  value={formData.email}
                  type="email"
                  className="w-full p-2 border-2 border-black rounded-lg"
                  placeholder="Exemple: malin@gmail.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-sm text-gray-500" htmlFor="">
                  Date souhaitée<span className="text-red-600">*</span>
                </label>
                <input
                  value={formData.date}
                  type="date"
                  className="w-full p-2 border-2 border-black rounded-lg"
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
              <div>
                <label className="text-sm text-gray-500" htmlFor="">
                  Heure <span className="text-red-600">*</span>
                </label>
                <input
                  value={formData.heureDebut}
                  type="time"
                  className="w-full p-2 border-2 border-black rounded-lg"
                  onChange={(e) =>
                    setFormData({ ...formData, heureDebut: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-sm text-gray-500" htmlFor="">
                  Type d'affaire <span className="text-red-600">*</span>
                </label>
                <select
                  value={formData.affaire_id}
                  className="w-full p-2 border-2 border-black rounded-lg"
                  onChange={(e) =>
                    setFormData({ ...formData, affaire_id: e.target.value })
                  }
                >
                  <option className="text-gray-500">
                    Choisissez votre Affaire
                  </option>
                  {affs.map((aff) => (
                    <option
                      key={aff.id}
                      value={aff.id}
                      className="text-gray-500"
                    >
                      {aff.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full">
              <div>
                <label className="text-sm text-gray-500" htmlFor="">
                  Description de votre situation{" "}
                  <span className="text-red-600">*</span>
                </label>
                <textarea
                  value={formData.subject}
                  name=""
                  id=""
                  cols="50"
                  className="w-full p-2 border-2 border-black rounded-lg resize-none"
                  placeholder="Exemple: un rendez-vous de discution"
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                ></textarea>
              </div>
              <p className="text-sm text-gray-500">0/500 caractères</p>
            </div>
            <button className="p-3 text-center w-full rounded-lg text-white bg-blue-700 hover:bg-blue-500 transition-colors duration-300">
              {loading ? "Chargement ..." : "Réservez la consultation"}
            </button>
          </form>
        </div>
        <div className="rounded-lg grid grid-cols-1 gap-3">
          <div className="p-5 bg-white shadow-lg rounded-lg space-y-2">
            <h1 className="text-center text-xl text-gray-600">
              Informations Pratiques
            </h1>
            <div className="flex space-x-4">
              <div className="p-3">
                <AiOutlineFieldTime size={15} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-md text-gray-800">
                  Durée de la consultation
                </h3>
                <p className="text-xs text-gray-500">
                  30 minute gratuites pour évaluer votre situation et vous
                  orienter
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="p-3">
                <FaLocationPin size={15} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-md text-gray-800">Lieu de rendez-vous</h3>
                <p className="text-xs text-gray-500">
                  Centre ville, 1er Arrondissement
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="p-3">
                <FaFile size={15} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-md text-gray-800">
                  Les document à apporter
                </h3>
                <p className="text-xs text-gray-500">
                  Tous les documents relatifs à votre affaire : contrats,
                  courriers, jugements
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 bg-blue-600 shadow-lg rounded-lg text-white">
            <h1 className="lg:text-xl text-md ">
              Besoin d'une consultation urgente ?
            </h1>
            <p className="md:text-sm text-xs text-white/50 mb-3">
              Pour des situations d'urgence, contactez-nous directement
            </p>
            <div className="flex space-x-2 mb-4">
              <FaPhone className="text-sm" />
              <p className="text-xs">(+236) 75504386</p>
            </div>
            <div className="flex space-x-2">
              <FaEnvelope className="text-sm" />
              <p className="text-xs">pabinguirufin@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
