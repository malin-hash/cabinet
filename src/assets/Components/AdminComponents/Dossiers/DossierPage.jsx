import React, { useState, useEffect } from "react";
import {
  AiFillCloseCircle,
  AiFillEdit,
  AiOutlineDelete,
  AiOutlineSearch,
} from "react-icons/ai";
import {
  getClient,
  getAffaire,
  getUser,
  dossier_add,
  deleteDossier,
  archive_folder,
} from "../../../../Apis/axios";
import AffComponent from "./AffComponent";
import ClientComponent from "./ClientComponent";
import AvocatComponent from "./AvocatComponent";
import TextaRea from "./TextaRea";
import { FaBoxArchive, FaFolderOpen } from "react-icons/fa6";
import ModalDelete from "../ModalDelete";
import ModalUpdate from "../ModalUpdate";
import axios from "axios";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { toast } from "react-toastify";

export default function DossierPage() {
  const [search, setSearch] = useState("");
  const [dataFolder, setDataFolder] = useState([]);

  const [formData, setFormData] = useState({
    client_id: "",
    affaire_id: "",
    avocat_id: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await dossier_add(formData);
      toast.success(res.data.message);
      fetchData(search);
      setFormData({
        client_id: "",
        affaire_id: "",
        avocat_id: "",
        description: "",
      });
    } catch (err) {
      return toast.error(err.response?.data?.message || "Erreur d'ajout");
    }
  };
  // Client list
  const [listClients, setListClients] = useState([]);
  const fetchClient = async () => {
    try {
      const res = await getClient();
      setListClients(res.data);
    } catch {
      return null;
    }
  };

  // Affaire list
  const [listAffaire, setListAffaire] = useState([]);
  const fetchAffaire = async () => {
    try {
      const res = await getAffaire();
      setListAffaire(res.data);
    } catch {
      return null;
    }
  };

  // Avocat list
  const [listAvocat, setListAvocat] = useState([]);
  const fetchAvocat = async () => {
    try {
      const res = await getUser();
      setListAvocat(res.data);
    } catch {
      return null;
    }
  };

  // Dossier list
  const fetchData = async (value) => {
    try {
      const res = await axios.get("http://localhost:5000/folders/list", {
        params: { q: value },
      });
      setDataFolder(res.data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  useEffect(() => {
    fetchData(search);
  }, [search]);
  // UseEffect
  useEffect(() => {
    fetchAvocat();
    fetchAffaire();
    fetchClient();
  }, []);
  // Property
  const [data, setData] = useState(null);
  const [property, setProperty] = useState(null);
  const handelProperty = (id) => {
    setData(id);
    return setProperty(id);
  };
  // Delete folder
  const deleteFolder = async (id) => {
    try {
      const res = await deleteDossier(id);
      toast.success(res.data.message || "Client supprimé");
      closeModal();
      fetchData();
    } catch {
      toast.error("Document non supprimé");
    }
  };
  // Archive
  const archiveFolder = async (id) => {
    try {
      const res = await archive_folder(id);
      toast.success(res.data.message);
      fetchData();
    } catch {
      toast.error("Dossier non archivé");
    }
  };
  // Open Modal
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(!openModal);
    setProperty(null);
  };
  const [modalUpdate, setModalUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState();
  const close = () => {
    setModalUpdate(!modalUpdate);
    fetchData();
  };
  const closeModalUpdate = (d) => {
    setDataUpdate(d);
    setModalUpdate(!modalUpdate);
    setProperty(null);
  };
  return (
    <div className="px-8">
      <p className="text-xl font-bold uppercase text-blue-500 mb-1">
        Gestion des Dossiers
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 justify-between md:mt-0 -mt-16">
        <div className="flex-1">
          <TextField
            label="Rechercher un dossier"
            placeholder="Rechercher un Dossier ..."
            type="text"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="text-gray-600 italic">
            <div className="mt-2 p-3 bg-gray-100 rounded-md">
              <p>
                Créer un nouveau dossier en remplissant le formulaire à droite
                ➡️
              </p>
            </div>
            {dataFolder == "" ? (
              <div className="mt-2 p-3 bg-red-400 rounded-md">
                <p className="text-center text-red-700">
                  Aucun dossier en cours ...
                </p>
              </div>
            ) : (
              <div className="mt-1 p-3  rounded-md grid grid-cols-3 gap-2">
                {dataFolder.map((d) => (
                  <div key={d.id} className="relative p-1 bg-gray-200 rounded">
                    <FaFolderOpen className="text-8xl text-blue-500 mx-auto" />
                    <div
                      onClick={() => handelProperty(d.id)}
                      className="absolute top-1 right-4 text-blue-600 hover:text-blue-400 cursor-pointer"
                    >
                      ▪▪▪
                    </div>
                    <p className="text-xs px-4">Nom : {d.client.name}</p>
                    <p className="text-xs px-4">Date : {d.created_at}</p>
                    <p className="text-xs px-4">N° : {d.numero_dossier}</p>
                    {property === d.id && (
                      <div className="p-2 bg-white rounded absolute top-2 w-40 right-2 shadow-lg">
                        <AiFillCloseCircle
                          onClick={() => setProperty(null)}
                          className="text-red-600 text-xl hover:text-red-800 transition-colors duration-300 cursor-pointer"
                        />
                        <div
                          onClick={() => closeModal()}
                          className="flex space-x-2 mt-2 p-1 hover:bg-gray-200 rounded-sm transition-colors duration-300 cursor-pointer"
                        >
                          <AiOutlineDelete className="text-red-600 text-md mt-0.5 " />
                          <p className="text-sm">Supprimer</p>
                        </div>
                        <div
                          onClick={() => closeModalUpdate(d)}
                          className="flex space-x-2 mt-2 p-1 hover:bg-gray-200 rounded-sm transition-colors duration-300 cursor-pointer"
                        >
                          <AiFillEdit className="text-green-600 text-md mt-0.5 " />
                          <p className="text-sm">Modifier</p>
                        </div>
                        <div
                          onClick={() => archiveFolder(d.id)}
                          className="flex space-x-2 mt-2 p-1 hover:bg-gray-200 rounded-sm transition-colors duration-300 cursor-pointer"
                        >
                          <FaBoxArchive className="text-purple-600 text-md mt-0.5 " />
                          <p className="text-sm">Archiver</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="shadow-lg mb-4">
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              {/* Affaire */}
              <div className="flex-col gap-2">
                <AffComponent
                  affaires={listAffaire}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
              {/* Client */}
              <div className="flex-col gap-2">
                <ClientComponent
                  clients={listClients}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            </div>
            {/* Avocat */}
            <div className="flex-col gap-2">
              <AvocatComponent
                avocats={listAvocat}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
            <div className="flex flex-col gap-2">
              <TextaRea formData={formData} setFormData={setFormData} />
            </div>
            <button className="text-white bg-blue-600 rounded-md text-center p-3 w-full hover:bg-blue-700 transition-colors duration-300">
              Enrégistrer
            </button>
          </form>
        </div>
        {openModal && (
          <ModalDelete
            closeModal={closeModal}
            data={data}
            deleteFolder={deleteFolder}
            fetchDossier={fetchData}
          />
        )}
        {modalUpdate && (
          <ModalUpdate dataUpdate={dataUpdate} close={() => close()} />
        )}
      </div>
    </div>
  );
}
