import axios from "axios";

const BASE_URL= 'https://youtube138.p.rapidapi.com'

const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'd4d2d3dfadmshf9dc48e96cfef32p105891jsneac5523a880e',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  

export const fetchDataFromApi = async(url) =>{
  const {data} = await axios.get(`${BASE_URL}/${url}`, options)

  return data 
 }