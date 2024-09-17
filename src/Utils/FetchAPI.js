import axios from "axios"

const URL = "https://youtube-v31.p.rapidapi.com"
const options = {
    params: {
        maxResults: 500,
        regionCode: 'IN',
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${URL}/${url}`, options);
    return data;
};




const searchApiUrl = "https://yt-api.p.rapidapi.com/search"
const searchApiOptions = {
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
        'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    }
};
export const searchFromApi = async (query) => {
    const { data } = await axios.get(`${searchApiUrl}?query=${query}`, searchApiOptions);
    return data;
};