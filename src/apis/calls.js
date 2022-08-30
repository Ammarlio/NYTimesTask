import axios from "axios"


const ENDPOINT = "https://api.nytimes.com/svc/mostpopular/v2/viewed/{date}.json"

export const fetchMostPopularNews = async (date) => {
    return axios.get(ENDPOINT.replace("{date}", date), {
        params: {
            "api-key": "c9clHU0naUHYP89SLtoohUJvq06LqmNd"
        }
    })
}