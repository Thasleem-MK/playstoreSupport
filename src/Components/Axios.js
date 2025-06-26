import axios from "axios"

const apiClient = axios.create({
    baseURL: "https://hosta-server.vercel.app/api"
});
export default apiClient;