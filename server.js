
const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

const API_KEY = 'api_key=1bcef3d1ab2664345811d5c1c8648c4b';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'
+API_KEY; 

//now_playing?api_key=1bcef3d1ab2664345811d5c1c8648c4b&language=pt-BR&page=1
app.use(cors());


app.get('/', async (req, res) => {
    
    try {
      // response é a resposta do axios MAS eu tiro o data de dentro do response.
    const { data } = await axios(
        `${BASE_URL}/movie/top_rated?${API_KEY}&language=pt-BR`);
    return res.json(data.results);
        
    } catch (error) {
        console.error(error);
    }

})

app.get('/discover', async (req, res) => {
    
    try {
      // response é a resposta do axios MAS eu tiro o data de dentro do response.
    const { data } = await axios(
        `${API_URL}&language=pt-BR`)
      // `${BASE_URL}/movie/top_rated?${API_KEY}&language=pt-BR`);
   // console.log(data)
    return res.json(data.results);
        
    } catch (error) {
        console.error(error);
    }

})

app.listen('3003')