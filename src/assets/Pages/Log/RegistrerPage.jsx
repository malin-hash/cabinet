import React, { useState, useEffect } from "react";
import { deleteUser, RegisterUser } from "../../../Apis/axios";
import { AiFillDelete, AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import ModalDelete from "../../Components/AdminComponents/ModalDelete";
import { toast } from "react-toastify";

export default function RegistrerPage() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  // Appel API recherche et affichage des Clients
  const fetchData = async (value) => {
    try {
      const res = await axios.get("http://localhost:5000/user/", {
        params: { q: value },
      });
      setData(res.data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  useEffect(() => {
    fetchData(search);
  }, [search]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    email: "",
    phoneNumber: "",
    genre: "",
    address: "",
    nationality: "",
    function: "",
    is_admin: "",
  });

  const [openModal, setOpenModal] = useState(false);
  const [dataId, setDataId] = useState(null);
  const closeModal = (id) => {
    setOpenModal(!openModal);
    setDataId(id);
  };
  const CLientDelete = async (id) => {
    try {
      const res = await deleteUser(id);
      fetchData(search);
      setFormData({
        name: "",
        firstname: "",
        email: "",
        phoneNumber: "",
        genre: "",
        address: "",
        nationality: "",
        function: "",
        is_admin: "",
      });
      setOpenModal(false);
      toast.success(res.data.message || "Client supprimé");
      return setData((prev) => prev.filter((t) => t.id != id));
    } catch (err) {
      toast.error(err.response?.data?.message || "Erreur d'ajout");
    }
  };
  // User create
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await RegisterUser(formData);
      setFormData({
        name: "",
        firstname: "",
        email: "",
        phoneNumber: "",
        genre: "",
        address: "",
        nationality: "",
        function: "",
        is_admin: "",
      });
      fetchData(search);
      toast.success(res.data.message || "Avocat ajouté avec succès");
      setLoading(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Erreur d'ajout");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-16 py-4">
      <div className="text-center uppercase font-bold mb-2 -mt-6">
        Ajouter un nouvel Avocat
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-3">
          <TextField
            label="Votre nom"
            multiline
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            label="Votre prénom"
            multiline
            variant="outlined"
            fullWidth
            value={formData.firstname}
            onChange={(e) =>
              setFormData({ ...formData, firstname: e.target.value })
            }
          />
          <TextField
            label="Votre Fonction"
            multiline
            variant="outlined"
            fullWidth
            value={formData.function}
            onChange={(e) =>
              setFormData({ ...formData, function: e.target.value })
            }
          />
          <TextField
            label="Votre E-mail"
            multiline
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <TextField
            label="Votre adresse"
            multiline
            variant="outlined"
            fullWidth
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          <TextField
            label="Votre Numéro de téléphone"
            type="number"
            variant="outlined"
            fullWidth
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />
          <FormControl fullWidth>
            <InputLabel>Votre sexe</InputLabel>
            <Select
              value={formData.genre}
              label="Votre sexe"
              onChange={(e) =>
                setFormData({ ...formData, genre: e.target.value })
              }
            >
              <MenuItem value="Masculin">Masculin</MenuItem>
              <MenuItem value="Feminin">Feminin</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Votre nationalité</InputLabel>
            <Select
              value={formData.nationality}
              label="Votre Nationalité"
              onChange={(e) =>
                setFormData({ ...formData, nationality: e.target.value })
              }
            >
              <MenuItem value="Française">Française</MenuItem>
              <MenuItem value="Centrafriaine">Centrafriaine</MenuItem>
              <MenuItem value="Congolaise">Congolaise</MenuItem>
              <MenuItem value="Ivoirienne">Ivoirienne</MenuItem>
              <MenuItem value="Camerounaise">Camerounaise</MenuItem>
              <MenuItem value="Tchadienne">Tchadienne</MenuItem>
              <MenuItem value="Gabonaise">Gabonaise</MenuItem>
              <MenuItem value="Egyptienne">Egyptienne</MenuItem>
              <MenuItem value="Chinoise">Chinoise</MenuItem>
              <MenuItem value="Americaine">Americaine</MenuItem>
              <MenuItem value="Japonaise">Japonaise</MenuItem>
              <MenuItem value="Angolaise">Angolaise</MenuItem>
              <MenuItem value="Portugaise">Portugaise</MenuItem>
              <MenuItem value="Belge">Belge</MenuItem>
              <MenuItem value="Espagnle">Espagnle</MenuItem>
              <MenuItem value="Saoudienne">Saoudienne</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Rôle de l'avocat</InputLabel>
            <Select
              value={formData.is_admin}
              label="Rôle de l'avocat"
              onChange={(e) =>
                setFormData({ ...formData, is_admin: e.target.value })
              }
            >
              <MenuItem value="1">Administrateur</MenuItem>
              <MenuItem value="0">Avocat Ordinaire</MenuItem>
            </Select>
          </FormControl>
        </div>
        <button className="p-3 mt-2 w-full rounded-lg text-white bg-blue-600 hover:bg-blue-800">
          {loading ? "Chargement" : "Ajouter"}
        </button>
      </form>
      <div className="text-center uppercase font-bold mb-2 mt-2">
        Liste de tous les avocats et personnels du cabinet
      </div>
      <div className="shadow-xl flex-1">
        <TextField
          label="Rechercher un Client"
          placeholder="Rechercher un Client ..."
          type="text"
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          <table className="w-full border-collapse mt-2 text-sm">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600 border-2">
                <th className="py-2 px-3 border-2">Nom</th>
                <th className="py-2 px-3 border-2">Prénom</th>
                <th className="py-2 px-3 border-2">Adresse</th>
                <th className="py-2 px-3 border-2">Téléphone</th>
                <th className="py-2 px-3 border-2">Fonction</th>
                <th className="py-2 px-3 border-2">Droit</th>
                <th className="py-2 px-3 border-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((clt) => (
                <tr key={clt.id}>
                  <td className="p-3 font-medium text-gray-800 border-r-2 border-l-2">
                    {clt.name}
                  </td>
                  <td className="p-3 font-medium text-gray-800 border-r-2 border-l-2">
                    {clt.firstname}
                  </td>
                  <td className="p-3 font-medium text-gray-800 border-r-2 border-l-2">
                    {clt.address}
                  </td>
                  <td className="p-3 font-medium text-gray-800 border-r-2 border-l-2">
                    {clt.phoneNumber}
                  </td>
                  <td className="p-3 font-medium text-gray-800 border-r-2 border-l-2">
                    {clt.function}
                  </td>
                  <td className="p-3 font-medium text-gray-800 border-r-2 border-l-2">
                    {clt.is_admin == 1
                      ? "Administrateur"
                      : "Utilisateur(trice)"}
                  </td>
                  <td className="font-medium flex mt-1 p-1  ">
                    <AiFillDelete
                      onClick={() => closeModal(clt.id)}
                      className="text-red-700 hover:bg-red-500 bg-red-400 rounded-md p-2 flex-1 text-3xl cursor-pointer  duration-300 transition-colors"
                    />
                    {/* <AiOutlineEdit
                      // onClick={() => handleEdit(clt)}
                      className="text-green-700 hover:bg-green-500 bg-green-400 rounded-r-md p-2 flex-1 text-3xl cursor-pointer  duration-300 transition-colors"
                    /> */}
                  </td>
                </tr>
              ))}
              {data.length == 0 && (
                <div className="mt-5">
                  <p className="text-red-500 text-xl text-center">
                    Aucun client trouvé ...
                  </p>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {openModal && (
        <ModalDelete
          closeModal={closeModal}
          data={dataId}
          deleteFolder={CLientDelete}
        />
      )}
    </div>
  );
}
