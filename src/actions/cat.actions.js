import axios from 'axios';

export async function getCats(pagination) {
    let url =  `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=cat&limit=${20}&offset=${pagination*20}&rating=g&lang=en`
    try {
       let response = await axios.get(
            url, {
          headers: {
             'Content-Type': 'application/json',
          }
       })
       return response;
    } catch (error) {
       return error;
    }
 }