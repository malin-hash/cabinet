import React, { useEffect, useState } from "react";
import {
  AiFillCloseCircle,
  AiFillDelete,
  AiFillEdit,
  AiOutlineEdit,
} from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { client_add, deleteClient, updateClient } from "../../../../Apis/axios";
import axios from "axios";
import ModalDelete from "../ModalDelete";
import { toast } from "react-toastify";

export default function ClientPage() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  // Appel API recherche et affichage des Clients
  const fetchData = async (value) => {
    try {
      const res = await axios.get("http://localhost:5000/client/search", {
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

  // const [message, setMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    email: "",
    phoneNumber: "",
    genre: "",
    address: "",
    nationality: "",
    profession: "",
  });

  // Quand on click sur modifier pré-remplir le formulaire
  const handleEdit = (user) => {
    setEditing(user.id);
    setFormData({
      name: user.name,
      firstname: user.firstname,
      phoneNumber: user.phoneNumber,
      genre: user.genre,
      email: user.email,
      address: user.address,
      nationality: user.nationality,
      profession: user.profession,
    });
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (editing) {
      try {
        const res = await updateClient(editing, formData);
        toast.success(res.data.message || "Client modifié avec succès");
        fetchData(search);
      } catch (err) {
        setLoading(false);
        return toast.error(err.response?.data?.message || "Erreur d'ajout");
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const res = await client_add(formData);
        toast.success(res.message || "Client ajouté avec succès");
        fetchData(search);
      } catch (err) {
        setLoading(false);
        return toast.error(err.response?.data?.message || "Erreur d'ajout");
      } finally {
        setLoading(false);
      }
    }
    setFormData({
      name: "",
      firstname: "",
      email: "",
      phoneNumber: "",
      genre: "",
      address: "",
      nationality: "",
      profession: "",
    });
    setEditing(null);
    fetchData(search);
    setLoading(false);
  };

  // Suppression du client
  const CLientDelete = async (id) => {
    const res = await deleteClient(id);
    fetchData(search);
    setFormData({
      name: "",
      firstname: "",
      email: "",
      phoneNumber: "",
      genre: "",
      address: "",
      nationality: "",
      profession: "",
    });
    setOpenModal(false);
    toast.success(res.data.message || "Client supprimé");
    fetchData(search);
    return setData((prev) => prev.filter((t) => t.id != id));
  };

  const [openModal, setOpenModal] = useState(false);
  const [dataId, setDataId] = useState(null);
  const closeModal = (id) => {
    setOpenModal(!openModal);
    setDataId(id);
  };

  return (
    <div className="md:px-6 px-3 -py-6 md:mt-0 -mt-10 ">
      <p className="text-xl font-bold uppercase text-blue-500 mb-1">
        Gestion des Clients
      </p>
      <div className="grid gap-2 md:grid-cols-2 grid-cols-1">
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
                    <td className="font-medium flex mt-1 p-1  ">
                      <AiFillDelete
                        onClick={() => closeModal(clt.id)}
                        className="text-red-700 hover:bg-red-500 bg-red-400 rounded-l-md p-2 flex-1 text-3xl cursor-pointer  duration-300 transition-colors"
                      />
                      <AiOutlineEdit
                        onClick={() => handleEdit(clt)}
                        className="text-green-700 hover:bg-green-500 bg-green-400 rounded-r-md p-2 flex-1 text-3xl cursor-pointer  duration-300 transition-colors"
                      />
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
        <div className="p-2">
          <h1 className="text-md text-center font-bold mb-2">
            {editing ? "Modifier un client" : "Ajouter un client"}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <TextField
                label="Nom du client"
                placeholder="Exemple: Jean ..."
                multiline
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <TextField
                label="Prénom du client"
                placeholder="Exemple: Paul ..."
                multiline
                variant="outlined"
                fullWidth
                value={formData.firstname}
                onChange={(e) =>
                  setFormData({ ...formData, firstname: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <FormControl fullWidth>
                <InputLabel>Sexe</InputLabel>
                <Select
                  value={formData.genre}
                  label="Sexe"
                  onChange={(e) =>
                    setFormData({ ...formData, genre: e.target.value })
                  }
                >
                  <MenuItem value="Masculin">Masculin</MenuItem>
                  <MenuItem value="Feminin">Feminin</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel>Nationalité</InputLabel>
                <Select
                  value={formData.nationality}
                  label="Nationalité"
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
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <TextField
                label="Adresse du client"
                placeholder="Exemple: Avenu D.Dacko"
                multiline
                variant="outlined"
                fullWidth
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
              <TextField
                label="Profession du client"
                placeholder="Exemple: Avocat d'affaire"
                multiline
                variant="outlined"
                fullWidth
                value={formData.profession}
                onChange={(e) =>
                  setFormData({ ...formData, profession: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <TextField
                label="Email du client"
                placeholder="Exemple: client@gmail.com"
                type="email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <TextField
                label="Numéro du client"
                placeholder="Exemple: 74427249"
                type="number"
                variant="outlined"
                fullWidth
                value={formData.phoneNumber || ""}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </div>
            <div className="flex justify-center">
              <button className="p-3 w-full rounded-lg text-white bg-blue-600 hover:bg-blue-800">
                {loading
                  ? "Chargement ..."
                  : `${editing ? "Modifier" : "Ajouter"}`}
              </button>
            </div>
          </form>
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
