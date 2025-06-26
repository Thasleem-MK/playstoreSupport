import axios from "axios"

const apiClient = axios.create({
    // baseURL: "https://hosta-server.vercel.app/api"
    baseURL: "http://localhost:3000/api/"
});
export default apiClient;