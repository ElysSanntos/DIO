import axios from 'axios'

const URL_API = 'http://localhost:5000/api/prompt'

export const makeRequest = async (message) => {
  try {
    console.log(message);
    const { data } = await axios.post(URL_API, message);
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error.response ? error.response.data : error.message);
    throw error; // Rejeitar a promessa para que o erro seja propagado
  }
};