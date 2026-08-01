const hoje = new Date();

const inicioAno = new Date(hoje.getFullYear(), 0, 1);

const diferenca = hoje - inicioAno;

const diaDoAno = Math.floor(diferenca / (1000 * 60 * 60 * 24));

const indice = diaDoAno % conteudos.length;

const conteudo = conteudos[indice];


document.getElementById("tituloDia").innerHTML = conteudo.titulo;

document.getElementById("mensagemDia").innerHTML = conteudo.mensagem;

document.getElementById("imagemDia").src = conteudo.imagem;

document.getElementById("musicaDia").href = conteudo.musica;
