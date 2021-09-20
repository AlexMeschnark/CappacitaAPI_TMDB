
const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const API_KEY = 'api_key=1bcef3d1ab2664345811d5c1c8648c4b';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'
+API_KEY; 
const dataBase = require('./src/database/dataBase')
app.use(cors());



 app.get('/comentarios', async (req, res) => {
     res.send( await dataBase.mostrarComentarios())
})

app.post('/comentarios/post', async (req, res) => {
    console.log(req)
     const comentarioFeito = await dataBase.salvarComentario({
         comentario: req.body.comentario,
         email: req.body.email,
         nome: req.body.nome

     })
    
    res.send(req.body)
})


app.get('/', async (req, res) => {
    
    try {
    const { data } = await axios(
        `${BASE_URL}/movie/top_rated?${API_KEY}&language=pt-BR`);
    return res.json(data.results);
        
    } catch (error) {
        console.error(error);
    }

})

app.get('/discover', async (req, res) => {
    
    try {
       let resposta = await axios.get(
            `${API_URL}&language=pt-BR`) 
        if (resposta.status == 200){
            const { data } = await axios(
                `${API_URL}&language=pt-BR`)
            return res.status(200).json(data.results); 
        }else{
            res.json({"message": "não encontrei no banco de dados"})
        }
        
    } catch (error) {
        console.error(error);
    }

})

   app.get('/movie/:id', async (req, res) => {
    
        try {
            let resposta = await axios.get(`${BASE_URL}/movie/${req.params.id}?${API_KEY}&language=pt-BR`);
            if (resposta.status == 200){
                const { data } = await axios(
                    `${BASE_URL}/movie/${req.params.id}?${API_KEY}&language=pt-BR`);
                return res.json(data);         
            }else{
                res.json({"message": "não encontrei no banco de dados"})
            }
       
        } catch (error) {
            console.error(error);
        }
    
    })
    


const PORT = process.env.PORT || 3003
app.listen(PORT)

module.exports = { app }