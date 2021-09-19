const { databaseConection } = require('./conection')

async function salvarComentario(comentarioBase)
{
    //nome, email, comentario

    const insertComentario = {
        nome: comentarioBase.nome,
        email: comentarioBase.email,
        comentario: comentarioBase.comentario
    }

    const result = await databaseConection('comentario').insert(insertComentario)

    if(result){
        return {
            nome: comentarioBase.nome,
            email: comentarioBase.email,
            comentario: comentarioBase.comentario,
            id: result[0]
        }
    }else{
       console.error("Deu erro!")
       return {
           error: "Deu erro na inserção."
       }     
    }

}

async function mostrarComentarios() {

    const result = await databaseConection.select().table('comentario')
    return result
}

module.exports = { salvarComentario, mostrarComentarios }