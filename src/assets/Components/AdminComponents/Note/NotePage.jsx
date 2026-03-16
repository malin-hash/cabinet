import React, { useState, useEffect } from "react";
import {
  AiFillEdit,
  AiFillEye,
  AiFillEyeInvisible,
  AiFillPrinter,
  AiTwotoneDelete,
} from "react-icons/ai";
import {
  TextField,
  Autocomplete,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import {
  note_add,
  updateNote,
  deleteNote,
  getDossier,
} from "../../../../Apis/axios";
import ModalDelete from "../ModalDelete";
import { toast } from "react-toastify";

export default function NotePage() {
  const [loading, setLoading] = useState(false);
  const [dossiers, setDossiers] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({
    description: "",
    folder_id: "",
  });

  const fetchDossiers = async () => {
    try {
      const res = await getDossier();
      setDossiers(res.data);
    } catch {
      return null;
    }
  };

  const [search, setSearch] = useState("");
  const [dataFolder, setDataFolder] = useState([]);
  const fetchData = async (value) => {
    const res = await axios.get("http://localhost:5000/note", {
      params: { q: value },
    });
    setDataFolder(res.data);
  };
  useEffect(() => {
    fetchData(search);
  }, [search]);
  useEffect(() => {
    fetchDossiers();
  }, []);

  const handleEdit = (note) => {
    setEditing(note.id);
    setFormData({
      description: note.description,
      folder_id: note.folder.id,
    });
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (editing) {
      try {
        const res = await updateNote(editing, formData);
        toast.success(res.data.message || "La note modifiée avec succès");
      } catch (err) {
        setLoading(false);
        return toast.error(err.response?.data?.message || "Erreur d'ajout");
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const res = await note_add(formData);
        toast.success(res.message || "La note ajoutée avec succès");
      } catch (err) {
        setLoading(false);
        return toast.error(err.response?.data?.message || "Erreur d'ajout");
      } finally {
        setLoading(false);
      }
    }
    setFormData({
      description: "",
      folder_id: "",
    });
    fetchData(search);
    setEditing(null);
    setLoading(false);
  };

  // Suppression de la note
  const noteDelete = async (id) => {
    const res = await deleteNote(id);
    fetchData(search);
    setFormData({
      description: "",
      folder_id: "",
    });
    close();
    toast.success(res.data.message || "Facture supprimée");
  };

  const [openDelete, setOpenDelete] = useState(false);
  const [data, setData] = useState(null);
  const close = () => setOpenDelete(!openDelete);
  const closeDelete = (id) => {
    setData(id);
    setOpenDelete(!openDelete);
  };

  return (
    <div className="md:px-8 px-3 py-2 md:mt-0 -mt-12">
      <p className="text-xl font-bold uppercase text-blue-500 mb-1">
        Gestion du Bloc Note
      </p>
      <div className="grid gap-2 md:grid-cols-2 grid-cols-1">
        <div className="p-2 shadow-xl flex-1">
          <TextField
            label="Rechercher une facture"
            placeholder="Rechercher une facture ..."
            multiline
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div>
            <table className="w-full border-collapse mt-2 text-sm">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-600">
                  <th className="py-2 px-3">Numéro dossier client</th>
                  <th className="py-2 px-3">Nom Client</th>
                  <th className="py-2 px-3">Nom Avocat</th>
                  <th className="py-2 px-3">Description</th>
                  <th className="py-2 px-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {dataFolder.map((clt) => (
                  <tr>
                    <td className="p-3 font-medium text-gray-800">
                      {clt.folder.numero_dossier}
                    </td>
                    <td className="p-3 font-medium text-gray-800">
                      {clt.folder.client.name} {clt.folder.client.firstname}
                    </td>
                    <td className="p-3 font-medium text-gray-800">
                      {clt.folder.avocat.name} {clt.folder.client.firstname}
                    </td>
                    <td className="p-3 font-medium text-gray-800">
                      {clt.description}
                    </td>
                    <td className="px-3 py-4 font-medium text-gray-800 flex space-x-3">
                      <AiTwotoneDelete
                        onClick={() => closeDelete(clt.id)}
                        className="text-red-600 text-lg cursor-pointer hover:text-red-800 duration-300 transition-colors"
                      />
                      <AiFillEdit
                        onClick={() => handleEdit(clt)}
                        className="text-blue-600 text-lg cursor-pointer hover:text-blue-800 duration-300 transition-colors"
                      />
                    </td>
                  </tr>
                ))}
                {dataFolder == 0 && (
                  <div className="text-center bg-red-300 p-4 rounded-md mb-3 w-full mt-2">
                    <p className="text-red-700">
                      Acune donnée ne correspond à cette recherche ...
                    </p>
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-2">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-2 mb-2">
              <Autocomplete
                options={dossiers}
                getOptionLabel={(option) => option.numero_dossier || ""}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                value={
                  dossiers.find((a) => a.id === formData.folder_id) || null
                }
                onChange={(event, value) => {
                  setFormData({
                    ...formData,
                    folder_id: value ? value.id : "",
                  });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Rechercher un numéro de dossier"
                    label="Sélectionner un dossier"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </div>
            <div className="mb-2">
              <TextField
                label="Détail de la note"
                placeholder="Exemple: Dossier concernant le litige ..."
                multiline
                minRows={4}
                maxRows={10}
                variant="outlined"
                fullWidth
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
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
      {openDelete && (
        <ModalDelete
          closeModal={closeDelete}
          data={data}
          deleteFolder={noteDelete}
        />
      )}
    </div>
  );
}
