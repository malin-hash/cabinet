import React, { useState, useEffect } from "react";
import {
  updateDossier,
  getClient,
  getAffaire,
  getUser,
} from "../../../Apis/axios";
import { TextField, Autocomplete } from "@mui/material";
import { AiFillCloseCircle } from "react-icons/ai";

export default function ModalUpdate({ dataUpdate, close }) {
  // const [folder, setFolder] = useState(null);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    affaire_id: dataUpdate.affaire.id,
    client_id: dataUpdate.client.id,
    avocat_id: dataUpdate.avocat.id,
    description: dataUpdate.description,
  });

  // Get one folder by Id
  // const fetchOneDoc = async (data) => {
  //   try {
  //     const res = await getDossierById(data);
  //     setFolder(res.data);
  //   } catch {
  //     return null;
  //   }
  // };
  // useEffect(() => {
  //   if (dataUpdate) {
  //     fetchOneDoc(dataUpdate);
  //   }
  // }, [dataUpdate]);

  // Pré-remplissage des champs
  // useEffect(() => {
  //   if (dataUpdate) {
  //     setFormData({
  //       affaire_id: dataUpdate.affaire.id,
  //       client_id: dataUpdate.client.id,
  //       avocat_id: dataUpdate.avocat.id,
  //       description: dataUpdate.description,
  //     });
  //   }
  // }, [dataUpdate]);

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
  useEffect(() => {
    fetchAffaire();
    fetchAvocat();
    fetchClient();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateDossier(dataUpdate.id, formData);
      // fetchDossier();
      setMessage(res.data.message);
    } catch {
      setMessage("erreur");
    }
  };

  return (
    <div className="p-10 bg-slate-100 rounded-lg  top-0 left-0 right-0 lg:mx-72 mx-5 mt-28 fixed z-50 shadow-2xl">
      <AiFillCloseCircle
        onClick={() => close()}
        className="text-red-600 text-xl hover:text-red-800 transition-colors duration-300 cursor-pointer"
      />
      {message && (
        <div className="text-center bg-green-300 p-4 rounded-md mb-3">
          <p className="text-green-700">{message} 📁</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-x-2 space-y-2 mt-8">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
          <Autocomplete
            options={listAffaire}
            getOptionLabel={(option) => option.title || ""}
            isOptionEqualToValue={(option, value) =>
              option.dataUpdate === value.dataUpdate
            }
            value={
              listAffaire.find((a) => a.id === formData.affaire_id) || null
            }
            onChange={(event, value) => {
              setFormData({ ...formData, affaire_id: value ? value.id : "" });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Rechercher une affaire"
                label="Sélectionner une affaire"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <Autocomplete
            options={listClients}
            getOptionLabel={(option) => option.name || ""}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            value={listClients.find((a) => a.id === formData.client_id) || null}
            onChange={(event, value) => {
              setFormData({ ...formData, client_id: value ? value.id : "" });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Rechercher un client"
                label="Sélectionner un client"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </div>
        <Autocomplete
          options={listAvocat}
          getOptionLabel={(option) => option.name || ""}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          value={listAvocat.find((a) => a.id === formData.avocat_id) || null}
          onChange={(event, value) => {
            setFormData({ ...formData, avocat_id: value ? value.id : "" });
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Rechercher un Avocat"
              label="Sélectionner un Avocat"
              variant="outlined"
              fullWidth
            />
          )}
        />
        <TextField
          label="Description du dossier"
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
        <button className="text-white bg-blue-600 rounded-md text-center p-3 w-full hover:bg-blue-700 transition-colors duration-300">
          Modifier
        </button>
      </form>
    </div>
  );
}
