import { axiosNetwork } from "./serviceTask";

export const fetchMostPopularNews = async (date) => {
    return axiosNetwork.get(`/svc/mostpopular/v2/viewed/${date}.json`)
}