import axios from "axios";

const baseURL = "https://api.nytimes.com"
const API_KEY = "c9clHU0naUHYP89SLtoohUJvq06LqmNd"

const axiosNetwork = axios.create({
    baseURL
});

axiosNetwork.interceptors.request.use(config => {
    config.params = {
        "api-key": API_KEY,
        ...config.params,
    };
    return config;
});

export {
    axiosNetwork
}