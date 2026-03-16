import React, { useState, useEffect } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { UpdataUserProfile, getMe } from "../../../../Apis/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ModifyProfil() {
  const navigate = useNavigate();
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
  });
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    try {
      const res = await getMe();
      setUser(res.data);
    } catch (error) {
      toast.error("Erreur de recupération:", error.response?.data);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  // User create
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await UpdataUserProfile(user.id, formData);
      setFormData({
        name: "",
        firstname: "",
        email: "",
        phoneNumber: "",
        genre: "",
        address: "",
        nationality: "",
        function: "",
      });
      toast.success(res.data.message || "Avocat ajouté avec succès");
      setLoading(false);
      navigate(0);
    } catch (err) {
      toast.error(err.response?.data?.message || "Erreur d'ajout");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-2">
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
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2 mb-2">
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
        </div>
        <button className="p-3 mt-2 w-full rounded-lg text-white bg-blue-600 hover:bg-blue-800">
          {loading ? "Chargement" : "Modifier"}
        </button>
      </form>
    </div>
  );
}
