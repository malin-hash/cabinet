import axios from "axios";

const API_BASE = "http://127.0.0.1:5000";

const api = axios.create({
  baseURL: API_BASE,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && token !== "undefined") {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// user
export const LoginUser = (data) => api.post("/user/connect", data);
export const RegisterUser = (data) => api.post("/user/add", data);
export const UpdataUserProfile = (id, data) =>
  api.put(`/user/update/profile/${id}`, data);
export const updateUserPassword = (id, data) =>
  api.put(`/user/update/password/${id}`, data);
export const getMe = () => api.get("/user/me");
export const getUser = () => api.get("/user/");
export const deleteUser = (id) => api.delete(`/user/${id}`);

// contact
export const contact = (data) => api.post("/contact", data);

// Rdv
export const rdv = (data) => api.post("/rdv/add", data);
export const getRdv = () => api.get("/");
export const getNumber = () => api.get("/number");
export const deleteRdv = (id) => api.delete(`/rdv/${id}`);
export const updateRdv = (id) => api.put(`/rdv/${id}`);

// Client
export const getClient = (value) =>
  api.get("/client/search", {
    params: { q: value },
  });
export const getNumberClient = () => api.get("/client/number");
export const getNumberClientMonth = () => api.get("/client/month");
export const getClientById = (id) => api.get(`/client/${id}`);
export const deleteClient = (id) => api.delete(`/client/${id}`);
export const updateClient = (id, data) => api.put(`/client/${id}`, data);
export const client_add = (data) => api.post("/client/add", data);

// Archive
export const getArchive = () => api.get("/archive");
export const deleteArchive = (id) => api.delete(`/archive/${id}`);
export const archive = (data) =>
  api.post("/archive/add", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// Affaire
export const getAffaire = () => api.get("/affaire");

// Dossier
export const getDossier = () => api.get("/folders/list");
export const getDossierArchiver = () => api.get("/folders/archive");
export const getNumberDossierNoArchiver = () =>
  api.get("/folders/number/noarchive");
export const getNumberDossierArchiver = () =>
  api.get("/folders/number/archive");
export const getNumberFolder = () => api.get("/folders/number");
export const deleteDossier = (id) => api.delete(`/folders/${id}`);
export const dossier_add = (data) => api.post("/folders", data);
export const updateDossier = (id, data) => api.put(`/folders/${id}`, data);
export const getDossierById = (id) => api.get(`/folders/${id}`);
export const archive_folder = (id) => api.patch(`/folders/${id}`);
export const noarchive_folder = (id) => api.patch(`/folders/no/${id}`);
export const getDocsMonth = () => api.get("/folders/list");

// Document
export const document_add = (data) =>
  api.post("/doc", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteDoc = (id) => api.delete(`/doc/${id}`);
export const getDocs = () => api.get("/doc");
export const updateDoc = (id, data) => api.put(`/doc/${id}`, data);

// Facture
export const facture_add = (data) => api.post("/facture", data);
export const getFacture = () => api.get("/facture");
export const updateFacture = (id, data) => api.put(`/facture/${id}`, data);
export const deleteFacture = (id) => api.delete(`/facture/${id}`);

// Note
export const note_add = (data) => api.post("/note", data);
export const getNote = () => api.get("/note");
export const updateNote = (id, data) => api.put(`/note/${id}`, data);
export const deleteNote = (id) => api.delete(`/note/${id}`);

export default api;
