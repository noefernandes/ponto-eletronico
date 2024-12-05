import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://ponto-eletronico-api.onrender.com/api/",
    headers: {
        "Content-Type": "application/json",
    },
});