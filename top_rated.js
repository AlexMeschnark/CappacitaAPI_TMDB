
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

    

getContent()
 async function getContent() {
     try {
         const response = await fetch('http://localhost:3003/')
       const data = await response.json();
       showTopRated(data)
     } catch (error) {
         console.error
    }

  }

function showTopRated(dados) {
    let linkImg = ''
  
    for (let dado of dados) {

        descriptionLength = dado.overview
        if (descriptionLength.length > 150)
        {
            descriptionLength= descriptionLength.substring(0,150)+'...';
        }
    
        if (descriptionLength == '')
        {
            descriptionLength= 'Filme sem descrição.';
        }
    


        let main = document.getElementById('main-top')
        linkImg = IMG_URL + dado.backdrop_path

        let movie = document.createElement('div')
        movie.className = 'movie'
        let movieInfo = document.createElement('div')
        let btnDetails = document.createElement('div')
        btnDetails.className = 'btn'
        btnDetails.innerHTML = 'Detalhes'
        btnDetails.onclick = function () {

            getMovieID(dado.id)
            document.getElementById('modal').style.top = "0";
        }
        movie.appendChild(btnDetails)
        let divOverview = document.createElement('div')
        divOverview.className = 'overview'
        let hOverview = document.createElement('h3')
        let pOverview = document.createElement('p')
        let img = document.createElement('img')
        img.src = linkImg
        img.alt = dado.title
        let vote = document.createElement('span')
        movie.appendChild(img)
        vote.className = `${getColor(dado.vote_average)}`
        vote.innerHTML = dado.vote_average
        movieInfo.className = 'movie-info'
        movie.appendChild(movieInfo)
        let title = document.createElement('h3')
        title.innerHTML = dado.title
        movieInfo.appendChild(title)
        movieInfo.appendChild(vote)

        pOverview.innerHTML = descriptionLength;
        hOverview.innerHTML = 'Descrição'
        divOverview.appendChild(hOverview)
        divOverview.appendChild(pOverview)
        movie.appendChild(divOverview)

        main.appendChild(movie)
    }
}

    

function fechar() {
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

// GET ID MODAL
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

function showMovieID(dados) {
   
    descriptionLength = dados.overview
    if (descriptionLength.length > 200)
    {
        descriptionLength= descriptionLength.substring(0,200)+'...';
    }

    
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
}
