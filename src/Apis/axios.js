import axios from "axios";

const API_BASE = 'http://127.0.0.1:3000'

const api = axios.create({
    baseURL: API_BASE,
    headers: {'Content-Type': 'application/json'},
    timeout: 10000,
    withCredentials: true
});

api.interceptors.request.use(
    (config) => {
        try {
            const token = localStorage.getItem('token')
            if(token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }catch (e){
            console.error('erreur localstorage', e)
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
);
// user
export const LoginUser = (data) => api.post("/login", data)
export const RegisterUser = (data) => api.post("/register", data)

// contact
export const contact = (data) => api.post("/contact", data)

// RDV
export const rdv = (data) => api.post("/rdv/add", data)
export const getRdv = () => api.get("/rdv")

// Client
export const getClient = () => api.get("/client")
export const deleteClient = (id) => api.delete(`/client/${id}`)
export const client = (data) => api.post("/client/add", data, {
    headers: {"Content-Type": "multipart/form-data"}
})

// Archive
export const getArchive = () => api.get("/archive")
export const deleteArchive = (id) => api.delete(`/archive/${id}`)
export const archive = (data) => api.post("/archive/add", data, {
    headers: {"Content-Type": "multipart/form-data"}
})

export default api;