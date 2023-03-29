import axios from "axios";


const BASE_URL = "https://youtube138.p.rapidapi.com";
// const process = { env: { REACT_APP_RAPIDAPI_KEY: '8e854240c2mshacca4983a64c0a0p1b5a36jsnbbfd897757f1' } };
const options = {
    params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': "8e854240c2mshacca4983a64c0a0p1b5a36jsnbbfd897757f1",
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
}

export const fetching = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}