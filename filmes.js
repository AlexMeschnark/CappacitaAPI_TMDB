
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

let idMovie = ''



getMovies()

async function getContent() {
    try {
        const response = await fetch('http://localhost:3003/')
        const data = await response.json();
        showMovie(data);
    } catch (error) {
        console.error
    }

}

async function getMovies() {
    try {
        const res = await fetch('http://localhost:3003/discover')
        const dataDiscovery = await res.json();
        showMovie(dataDiscovery);
    } catch (error) {
        console.error(error)
    }
}




function showMovie(dados) {
    let linkImg = ''
    for (let dado of dados) {
        linkImg = IMG_URL + dado.backdrop_path
        movieId = dado.id
        let main = document.getElementById('main')
        let movie = document.createElement('div')
        let movieIdDiv = document.createElement('div')
        movie.className = 'movie'
        let movieInfo = document.createElement('div')
        let btnDetails = document.createElement('div')
        btnDetails.className = 'btn'
        // let link = document.createElement('a')
        //  btnDetails.setAttribute('href', './src/movie/movie.html');
        // link.appendChild(btnDetails)
        btnDetails.innerHTML = 'Detalhes'

        movie.appendChild(btnDetails)

        let divOverview = document.createElement('div')
        divOverview.className = 'overview'
        let hOverview = document.createElement('h3')
        let pOverview = document.createElement('p')

        let img = document.createElement('img')
        img.src = linkImg
        img.alt = dado.title
        btnDetails.onclick = function () {

            getMovieID(dado.id)
            document.getElementById('modal').style.top = "0";
        }
        // { 
        //     document.getElementById('modal').style.top = "0"; 
        //     await getMovieID(dado.id)
        //   }
        let vote = document.createElement('span')



        movie.appendChild(img)

        movieInfo.className = 'movie-info'
        movie.appendChild(movieInfo)
        let title = document.createElement('h3')
        title.innerHTML = dado.title

        vote.className = `${getColor(dado.vote_average)}`
        vote.innerHTML = dado.vote_average
        movieInfo.appendChild(title)
        movieInfo.appendChild(vote)

        pOverview.innerHTML = dado.overview
        hOverview.innerHTML = 'Descrição'
        divOverview.appendChild(hOverview)
        divOverview.appendChild(pOverview)
        movie.appendChild(divOverview)

        main.appendChild(movie)
    }


}


async function getMovieID(id) {
    try {
        const res = await fetch(`http://localhost:3003/movie/${id}`)
        const data = await res.json();
        showMovieID(data)
        // console.log(data)
    } catch (error) {
        console.error(error)
    }
}
//

function showMovieID(dados) {
    let descriptionLength = dados.overview

    if(descriptionLength.length > 15)
    {
        descriptionLentgh = descriptionLength.substring(0,15)+'...';
    }

    let mainID = document.getElementById('main-id')
    let section = document.querySelector('.featured')
    let divOriginalName = document.getElementById('original-name')
    let points = document.getElementById('featured-points')
    let description = document.getElementById('featured-description')
    let date = document.getElementById('featured-year')
    let genres = [];
    let genresDiv = document.getElementById('featured-genres')
    let totalPoints = document.getElementById('total-points');
    for (let i in dados.genres) {
        genres.push(dados.genres[i].name)
    }
    genresDiv.innerHTML = `Gêneros: ${genres.join(', ')}`
    let firstDate = new Date(dados.release_date);
    section.style.backgroundImage = `url(${IMG_URL + dados.backdrop_path})`

    totalPoints.innerHTML = `Total de votos: ${dados.vote_count}`
    divOriginalName.innerHTML = dados.original_title;
    points.innerHTML = `Pontuação: ${dados.vote_average}`;
    points.className = `${getColor(dados.vote_average)}`
    description.innerHTML = descriptionLength;
    date.innerHTML = firstDate.getFullYear();
    console.log(dados)
    // for (let genero of dados.genres)
    // {
    //     let div = document.createElement('div')
    //     div.innerHTML = genero.name
    //     mainID.appendChild(div)
    // }


    // let teste = document.getElementById('teste')
    // let title = document.createElement('h1')
    // title.innerHTML = dados.title
    // teste.appendChild(title)

}




function fechar() {
    // let modal = document.querySelector('.modal')
    //  modal.style.display = 'none';
    document.getElementById('modal').style.top = '-100%';
}


function getColor(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return "orange"
    } else {
        return 'red'
    }
}


// export default {
//     idMovie 
// }
