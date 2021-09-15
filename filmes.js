
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const main = document.getElementById('main')
getMovies()

// getContent()

// async function getContent()
// {
//     try {
//         const response = await fetch('http://localhost:3003/') 
//         console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error
//     }
    
// }

async function getMovies()
{
    try {
        const res = await fetch('http://localhost:3003/discover')
        const dataDiscovery = await res.json();
        console.log(dataDiscovery.result)
        showDiscovery(dataDiscovery);
    } catch (error) {
        console.error(error)
    }
}

 function showDiscovery(dados)
{
    let output = '';
    
    for (let dado of dados)
    {
        
       
        output +=
        `
        <img src="${IMG_URL}${dado.backdrop_path}" alt="${dado.title}">
           
        <div class="movie-info">
            <h3>${dado.title}</h3>
            <span class="${getColor(dado.vote_average)}">${dado.vote_average}</span>
        </div>

        <div class="overview">
            <h3>Overview</h3>
             ${dado.overview}
        </div>
        `
    }
    document.querySelector('.movie').innerHTML = output
    

 
}

function getColor(vote)
{
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}

// function show(users)
// {
//     let output = ''

//     for( let user of users )
//     {
//         output += `<div class="row g-0">
//         <div class="col-md-4">
//           <img src="..." class="img-fluid rounded-start" alt="...">
//         </div>
//         <div class="col-md-8">
//           <div class="card-body">
//             <h5 class="card-title">${user.original_title}</h5>
//             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//           </div>
//         </div>
//       </div>`
//     }

//     document.querySelector('#teste').innerHTML = output
// }

//`<li>${user.original_title}</li>`