


const btn = document.querySelector('#submit');

async function postComment(url, bodyres) {
    try {
         await fetch(url, {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(bodyres),
        })

            .then((resposta) => resposta.json())
            .then((data) => console.log(data));

    } catch (error) {
        console.log(error)
    }
    location.reload();
    return false;

}




btn.addEventListener("click", async function (e) {
    e.preventDefault();
    url = ('http://localhost:3003/comentarios/post')
    const nomeInput = document.querySelector('#nome');
    const emailInput = document.querySelector('#email')
    const commentInput = document.querySelector('#comment')
    const body = {
        comentario: commentInput.value,
        email: emailInput.value,
        nome: nomeInput.value
    }
    console.log(body)
    postComment(url, body)
});


getComments()


async function getComments() {
    try {
        const res = await fetch('http://localhost:3003/comentarios')
        const dataComments = await res.json();
        showComments(dataComments);
    } catch (error) {
        console.error(error)
    }
}


function showComments(dados) {
    for (let dado of dados) {
       console.log(dado)
        let main = document.getElementById('main-comentario')
        let divComentario = document.createElement('article')
        divComentario.className = 'comentario'
        let nome = document.createElement('span')
        let email = document.createElement('span')
        let comentario = document.createElement('span')
        let data = document.createElement('span')
        let info = document.createElement('div')

        dataFormatada = dado.create_at.substring(0,10).split('-').reverse().join('-');;
        horarioFormatado = dado.create_at.substring(11,16)
        info.className = 'info'
        comentario.className = 'title'
        data.className = 'title'

       nome.innerHTML = dado.nome;
       comentario.innerHTML = dado.comentario;
       data.innerHTML =  dataFormatada + ' ' + horarioFormatado
       email.innerHTML = dado.email;


       info.appendChild(nome)
      info.appendChild(email)
       divComentario.appendChild(info)
       divComentario.appendChild(comentario)
       divComentario.appendChild(data)
      main.appendChild(divComentario)
    }

}