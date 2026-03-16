import React, { useState, useEffect } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { updateUserPassword, getMe } from "../../../../Apis/axios";
import { toast } from "react-toastify";

export default function ModifyPassword() {
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
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    newpassword: "",
    confirmpassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await updateUserPassword(user.id, formData);
      setFormData({
        password: "",
        newpassword: "",
        confirmpassword: "",
      });
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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <TextField
            label="Votre ancien mot de passe"
            type="password"
            variant="outlined"
            fullWidth
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <TextField
            label="Votre nouveau mot de passe"
            type="password"
            variant="outlined"
            fullWidth
            value={formData.newpassword}
            onChange={(e) =>
              setFormData({ ...formData, newpassword: e.target.value })
            }
          />
        </div>
        <TextField
          label="Confirmer le nouveau mot de passe"
          type="password"
          variant="outlined"
          fullWidth
          value={formData.confirmpassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmpassword: e.target.value })
          }
        />
        <button className="p-3 mt-2 w-full rounded-lg text-white bg-blue-600 hover:bg-blue-800">
          {loading ? "Chargement" : "Modifier"}
        </button>
      </form>
    </div>
  );
}
