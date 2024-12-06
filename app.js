const db=require('./config/database');
const Filme = require('./models/filme.model.js');

async function  testaConexao() {
    try{
        await db.uthenticate();
        console.log('conexao com sucesso');

  
  }catch(e){
    console.log('erro')
}
}
//testaConexao();

async function sincronizarBD() {
    try {
        await db.sync({ force: false});
        console.log("Tabelas sincronizadas com sucesso!");
    } catch (error) {
        console.error("Erro ao sincronizar tabelas:", error);
    }
}


sincronizarBD();

async function operacoesCRUD() {
    const filme = await Filme.create({ titulo: 'Rei Leão',
                                        sinopse: 'Hakuna Matata',
     
    });
    imprimirfilme();
}

 function imprimirfilme(filme){
    console.log('ID: ${filme.id}');
    console.log('Titulo:${filme.titulo}');
    console.log('sinopse:${filme.sinopse}');
    console.log('data de criação:${fime.createAt}');
    console.log('data de atualização:${filme.updateAt}');
    console.log(' ');
 }

 sincronizarBD();

 //operacoesCRUD();

 async function retornarTodosFilmes() {
    const filmes = await Filme.findAll();

    filmes.forEach(filme => {
        imprimirfilme(filme);
    });
 }

 //retornarTodosFilmes();

 async function retornarFilmePorTitulo(titulo) {
    const filme = await Filme.findOne({
                                        where: { titulo: titulo }
                                    });
    if (filme) {
        imprimirfilme(filme);
    } else {
        console.log('Filme com título ${titulo} não encontrado.');
    }
 }

 retornarFilmePorTitulo();


 async function operacoesCRUDatualizadas();
 const filme =await Filme.findByPk(2);
 

 filme.titulo = 'Filme atualizado';
 filme.sinopse = 'Sinopse do filme atualizado';
 filme.save();