import React, { useState, useEffect } from "react";
import {
  AiFillAccountBook,
  AiFillDelete,
  AiFillEdit,
  AiOutlineDownload,
  AiOutlinePrinter,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { FaFileArchive } from "react-icons/fa";
import ModalArchive from "./ModalArchive";
import { getNumberFolder, noarchive_folder } from "../../../../Apis/axios";
import { FiEdit, FiPrinter, FiShare2, FiTrash2 } from "react-icons/fi";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

export default function ArchivePage() {
  const [archive, setArchive] = useState(null);
  const [search, setSearch] = useState("");
  const [dataFolder, setDataFolder] = useState([]);
  // Fetch archive number
  const fetchNumber = async () => {
    const res = await getNumberFolder();
    setArchive(res.data.folders);
  };
  useEffect(() => {
    fetchNumber();
  }, []);

  const dearchiveFolder = async (id) => {
    try {
      const res = await noarchive_folder(id);
      toast.success(res.data.message);
      fetchData(search);
      fetchNumber();
    } catch {
      toast.error("Dossier non désarchivé");
    }
  };

  // Fetch all archive
  const fetchData = async (value) => {
    const res = await axios.get("http://localhost:5000/folders/archive", {
      params: { q: value },
    });
    setDataFolder(res.data);
  };
  useEffect(() => {
    fetchData(search);
  }, [search]);

  return (
    <div className="py-2 px-8">
      <p className="text-xl font-bold uppercase text-blue-500 mb-1">
        Liste des documents archivés
      </p>
      <div className="flex lg:flex-row flex-col md:flex-row space-x-2 justify-between bg-slate-100 -mt-16 md:mt-0 ">
        <div className="flex-1">
          <TextField
            label="Rechercher un dossier archiver"
            placeholder="Rechercher un dossier archiver ..."
            type="search"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {dataFolder == 0 && (
            <div className="text-center bg-red-300 p-4 rounded-md mt-3">
              <p className="text-red-700">Aucune donnée trouvée</p>
            </div>
          )}
          {dataFolder.map((doc) => (
            <div
              key={doc.id}
              className="flex justify-between p-3 bg-white rounded-md mb-2 mt-4"
            >
              <div className="flex space-x-2">
                <div className="p-3 bg-blue-300 text-blue-700 rounded-md">
                  <FaFileArchive className="text-sm" />
                </div>
                <div>
                  <p className="text-sm font-bold">{doc.client.name}</p>
                  <p className="text-xs">{doc.numero_dossier}</p>
                  <p className="text-xs">{doc.created_at}</p>
                </div>
              </div>
              <ul className="text-gray-700 text-sm flex space-x-2">
                <li
                  onClick={() => dearchiveFolder(doc.id)}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <FiEdit className="text-blue-500" />
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="p-2 md:w-72 w-full">
          <div className="bg-white rounded-lg shadow-xl py-2 px-5 mb-4">
            <p className="text-sm text-gray-600 mb-2 font-bold">Statistique</p>
            <div className="p-2 flex justify-between">
              <p className="text-xs text-gray-600">
                Total documents Archiver :
              </p>
              <p className="text-xs text-gray-600">{archive}</p>
            </div>
          </div>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
}
