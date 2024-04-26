import axios from "axios"

const URL = "https://youtube-v31.p.rapidapi.com"
const options = {

    url: URL,
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${URL}/${url}`, options);
    return data;
};



console.log(import.meta.env.VITE_RAPID_API_KEY)
