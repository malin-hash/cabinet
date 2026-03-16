import React, { useState, useEffect } from "react";
import {
  Autocomplete,
  TextField,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { FiEdit, FiPrinter, FiShare } from "react-icons/fi";
import { FaFileAlt, FaFilePdf, FaWindowClose } from "react-icons/fa";
import { getDossier, document_add, deleteDoc } from "../../../../Apis/axios";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import ModalDelete from "../ModalDelete";
import DocumentsModalPrint from "./DocumentsModalPrint";
import { toast } from "react-toastify";

export default function DocumentPage() {
  const [dossiers, setDossiers] = useState([]);
  const [selectedDossier, setSelectedDossier] = useState(null);
  const [files, setFiles] = useState([null]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [dataFolder, setDataFolder] = useState([]);
  const [openModalPrint, setOpenModalPrint] = useState(false);

  const [dataPrint, setDataPrint] = useState("");
  const closeModalPrint = (dataId) => {
    setDataPrint(dataId);
    setOpenModalPrint(!openModalPrint);
  };
  // Extensions autorisées
  const ALLOWED_EXTENSION = ["pdf", "jpg", "png", "jpeg"];

  const handleFileChange = (index, file) => {
    if (!file) return;
    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (!ALLOWED_EXTENSION.includes(fileExtension)) {
      toast.error(
        `Extension de fichier non autorisée. Extensions autorisées: ${ALLOWED_EXTENSION.join(
          ", ",
        )}`,
      );
      return;
    }
    const updatedFiles = [...files];
    updatedFiles[index] = file;
    setFiles(updatedFiles);
  };

  const addFileField = () => {
    setFiles([...files, null]);
  };

  const removeFileField = (index) => {
    if (files.length > 1) {
      const updatedFiles = files.filter((_, i) => i !== index);
      setFiles(updatedFiles.length ? updatedFiles : [null]);
    }
  };
  // Soummission formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    if (!selectedDossier) {
      toast.error("Veuillez sélectionner un dossier.");
      return;
    }
    const formData = new FormData();
    formData.append("folder_id", selectedDossier.id);
    files.forEach((file, index) => {
      if (file) {
        formData.append(`files`, file);
      } else {
        toast.error(
          `Veuillez sélectionner un fichier pour le champ  ${index + 1}.`,
        );
      }
    });
    try {
      setLoading(true);
      // await uploadFiles(formData);
      const response = await document_add(formData);
      toast.success(
        response.data.message || "Fichiers téléchargés avec succès.",
      );
      setSelectedDossier("");
      setFiles([]);
      fetchData(search);
    } catch (err) {
      toast.error(err.response.data || "Erreur lors du téléchargement.");
    } finally {
      setLoading(false);
    }
  };

  // Suppression des documents
  const deleteDocs = async (id) => {
    try {
      const res = await deleteDoc(id);
      toast.success(res.data.message);
      fetchData(search);
      close();
    } catch {
      toast.error("Aucune donnée ne correspond à cette adresse");
    }
  };
  // Récupération des dossiers
  const fetchDossier = async () => {
    try {
      const res = await getDossier();
      setDossiers(res.data);
    } catch {
      return toast.error("Erreur de chargement !");
    }
  };

  // Récupération
  const fetchData = async (value) => {
    const res = await axios.get("http://localhost:5000/doc", {
      params: { q: value },
    });
    setDataFolder(res.data);
  };
  useEffect(() => {
    fetchData(search);
  }, [search]);
  useEffect(() => {
    fetchDossier();
  }, []);

  // const handleEdit = (doc) => {
  //   // const dossier = dossiers.find((d) => d.id === doc.folder.id);
  //   setSelectedDossier(doc.folder);
  //   setIsEditing(true);
  //   setIdEditing(doc.id);
  //   setFiles([null]);
  // };

  // Ouverture modal suppression
  const [openDelete, setOpenDelete] = useState(false);
  const [data, setData] = useState(null);
  const close = () => setOpenDelete(!openDelete);
  const closeDelete = (id) => {
    setData(id);
    setOpenDelete(!openDelete);
  };
  return (
    <div className="px-8">
      <p className="text-xl font-bold uppercase text-blue-500 mb-1">
        Gestion des documents
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
        <div className="flex-1">
          <TextField
            label="Rechercher un dossier"
            placeholder="Rechercher un dossier ..."
            type="search"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {dataFolder == null ? (
            <p>Aucun Document disponible</p>
          ) : (
            <div className="mt-2">
              {dataFolder.map((doc) => (
                <div
                  key={doc.id}
                  className="flex justify-between p-2 rounded-md mb-1 bg-gray-100"
                >
                  <div className="flex space-x-2">
                    <div className="py-2 px-4 bg-white text-red-600 rounded-md">
                      <FaFilePdf className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-sm">
                        {" "}
                        <span className="font-bold">Nom :</span> {doc.filename}
                      </p>
                      <p className="text-sm ">
                        {" "}
                        <span className="font-bold">N° :</span>{" "}
                        {doc.folder.numero_dossier}
                      </p>
                    </div>
                  </div>
                  <ul className="text-gray-700 text-sm flex space-x-2">
                    {/* <li
                      onClick={() => handleEdit(doc)}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      <FiEdit className="text-green-500" />
                    </li> */}
                    <li
                      onClick={() => closeModalPrint(doc)}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      <FiPrinter className="text-indigo-500" />
                    </li>
                    <li
                      onClick={() => closeDelete(doc.id)}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      <AiFillDelete className="text-red-500" />
                    </li>
                  </ul>
                </div>
              ))}
              {dataFolder == 0 && (
                <div className="text-center bg-red-300 p-4 rounded-md mb-3">
                  <p className="text-red-700">Aucun document trouvé</p>
                </div>
              )}
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex-1 space-y-4">
          <Stack spacing={2}>
            <Autocomplete
              options={dossiers}
              getOptionLabel={(option) => option.numero_dossier || ""}
              getOptionEqualToValue={(option, value) => option.id === value.id}
              value={selectedDossier}
              onChange={(event, newValue) => {
                setSelectedDossier(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Sélectionner un dossier"
                  required
                />
              )}
            />
            {files.map((file, index) => (
              <div key={index} className="flex items-center gap-2">
                <TextField
                  type="file"
                  onChange={(e) => handleFileChange(index, e.target.files[0])}
                  fullWidth
                  accept={ALLOWED_EXTENSION.map((ext) => `.${ext}`).join(",")}
                  required
                />
              </div>
            ))}
            <div className="grid grid-cols-2 gap-2">
              <div
                onClick={addFileField}
                className={`${
                  files.length >= 10
                    ? "disabled"
                    : "px-3 py-1 border-2 border-blue-400 rounded-md hover:bg-blue-400 duration-300 transition-colors text-blue-500 text-xl text-center"
                }`}
              >
                +
              </div>
              <div
                onClick={() => removeFileField(files.length - 1)}
                className={`${
                  files.length <= 1
                    ? "disabled"
                    : "px-3 py-1 border-2 border-red-400 rounded-md hover:bg-red-400 duration-300 transition-colors text-red-500 text-xl text-center"
                }`}
              >
                -
              </div>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? "Téléchargement..." : "Ajouter"}
            </Button>
          </Stack>
        </form>
        {openDelete && (
          <ModalDelete
            closeModal={closeDelete}
            data={data}
            deleteFolder={deleteDocs}
          />
        )}
        {openModalPrint && (
          <DocumentsModalPrint
            closeModalPrint={closeModalPrint}
            dataPrint={dataPrint}
          />
        )}
      </div>
    </div>
  );
}
