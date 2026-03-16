import React, { useState, useEffect } from "react";
import { AiFillEdit, AiFillPrinter, AiTwotoneDelete } from "react-icons/ai";
import { TextField, Autocomplete } from "@mui/material";
import {
  getDossier,
  facture_add,
  updateFacture,
  deleteFacture,
} from "../../../../Apis/axios";
import ModalDelete from "../ModalDelete";
import FactureModal from "./FactureModal";
import axios from "axios";
import { toast } from "react-toastify";

export default function FacturesPage() {
  const [loading, setLoading] = useState(false);
  const [dossiers, setDossiers] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({
    nom: "",
    FraisOuverture: "",
    FraisFirstInstance: "",
    FraisAppel: "",
    FraisCassation: "",
    FraisIncident: "",
    FraisFinProcedure: "",
    folder_id: "",
  });
  // Selection de tous les dossiers de la bd
  const fetchDossiers = async () => {
    try {
      const res = await getDossier();
      setDossiers(res.data);
    } catch {
      return null;
    }
  };

  // Selection de toutes les factures de la bd
  const [search, setSearch] = useState("");
  const [dataFolder, setDataFolder] = useState([]);
  const fetchData = async (value) => {
    const res = await axios.get("http://localhost:5000/facture", {
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
  // Quand on click sur modifier pré-remplir le formulaire

  const handleEdit = (facture) => {
    setEditing(facture.id);
    setFormData({
      nom: facture.nom,
      FraisOuverture: facture.FraisOuverture,
      FraisFirstInstance: facture.FraisFirstInstance,
      FraisAppel: facture.FraisAppel,
      FraisCassation: facture.FraisCassation,
      FraisIncident: facture.FraisIncident,
      FraisFinProcedure: facture.FraisFinProcedure,
      folder_id: facture.folder.id,
    });
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (editing) {
      try {
        const res = await updateFacture(editing, formData);
        toast.success(res.data.message || "Facture modifié avec succès");
      } catch (err) {
        setLoading(false);
        return toast.error(err.response?.data?.message || "Erreur d'ajout");
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const res = await facture_add(formData);
        toast.success(res.message || "Facture ajouté avec succès");
      } catch (err) {
        setLoading(false);
        return toast.error(err.response?.data?.message || "Erreur d'ajout");
      } finally {
        setLoading(false);
      }
    }
    setFormData({
      nom: "",
      FraisOuverture: "",
      FraisFirstInstance: "",
      FraisAppel: "",
      FraisCassation: "",
      FraisIncident: "",
      FraisFinProcedure: "",
      folder_id: "",
    });
    fetchData(search);
    setEditing(null);
    setLoading(false);
  };

  // Suppression de la facture
  const factureDelete = async (id) => {
    const res = await deleteFacture(id);
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
  const [openFacture, setOpenFacture] = useState(false);
  const [dataFacture, setDataFacture] = useState(null);
  const closeFacture = () => setOpenFacture(!openFacture);
  const closeFactureId = (id) => {
    setDataFacture(id);
    setOpenFacture(!openFacture);
  };
  return (
    <div className="md:px-8 px-3 py-2 md:mt-0 -mt-12">
      <p className="text-xl font-bold uppercase text-blue-500 mb-1">
        Gestion des Honoraires
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
                  <th className="py-2 px-3">Nom Adversaire</th>
                  <th className="py-2 px-3">Nom Client</th>
                  <th className="py-2 px-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {dataFolder.map((clt) => (
                  <tr key={clt.id}>
                    <td className="p-3 font-medium text-gray-800">
                      {clt.folder.numero_dossier}
                    </td>
                    <td className="p-3 font-medium text-gray-800">{clt.nom}</td>
                    <td className="p-3 font-medium text-gray-800">
                      {clt.folder.client.name}
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
                      <AiFillPrinter
                        onClick={() => closeFactureId(clt)}
                        className="text-orange-600 text-lg cursor-pointer hover:text-orange-800 duration-300 transition-colors"
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
            <div className="grid grid-cols-2 gap-2 mb-2">
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
              <TextField
                label="Nom de l'Accusé"
                multiline
                variant="outlined"
                fullWidth
                value={formData.nom}
                onChange={(e) =>
                  setFormData({ ...formData, nom: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <TextField
                label="Frais première instance"
                variant="outlined"
                type="number"
                fullWidth
                value={formData.FraisFirstInstance}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    FraisFirstInstance: e.target.value,
                  })
                }
              />
              <TextField
                label="Frais d'ouverture de Dossier"
                variant="outlined"
                type="number"
                fullWidth
                value={formData.FraisOuverture}
                onChange={(e) =>
                  setFormData({ ...formData, FraisOuverture: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <TextField
                label="Frais Prcédure d'appel"
                variant="outlined"
                type="number"
                fullWidth
                value={formData.FraisAppel}
                onChange={(e) =>
                  setFormData({ ...formData, FraisAppel: e.target.value })
                }
              />
              <TextField
                label="Frais en cassation"
                variant="outlined"
                type="number"
                fullWidth
                value={formData.FraisCassation}
                onChange={(e) =>
                  setFormData({ ...formData, FraisCassation: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <TextField
                label="Frais Incident"
                variant="outlined"
                type="number"
                fullWidth
                value={formData.FraisIncident}
                onChange={(e) =>
                  setFormData({ ...formData, FraisIncident: e.target.value })
                }
              />
              <TextField
                label="Frais Fin procédure"
                variant="outlined"
                type="number"
                fullWidth
                value={formData.FraisFinProcedure}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    FraisFinProcedure: e.target.value,
                  })
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
          deleteFolder={factureDelete}
        />
      )}
      {openFacture && (
        <FactureModal dataFacture={dataFacture} closeFacture={closeFacture} />
      )}
    </div>
  );
}
