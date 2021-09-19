
//import {idMovie} from ('../../filmes')
const { idMovie } = require('../../filmes').default


getMovieID(idMovie)

async function getMovieID(id)
{
    try {
        const res = await fetch(`http://localhost:3003/movie/${id}`)
        const data = await res.json();
        showMovieID(data)
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

function showMovieID(dados)

{
    console.log(dados)
    // let teste = document.getElementById('teste')
    // let title = document.createElement('h1')
    // title.innerHTML = dados.title
    // teste.appendChild(title)

}

