//Exercicio 4

/*
### Exercício 4: Filtros na foto

Codifique no arquivo `script/controles-foto-anotada.js`.
Para exercitar a propriedade CSS `filter`, permita que o usuário escolha um filtro do `select#filtro-da-foto`. 

Quando o usuário escolher um filtro, simplesmente altere a propriedade `filter` da `.foto-anotada > img` para o valor da opção escolhida.
 O FAQ mostra [como pegar o valor da opção escolhida em um campo `select`](#como-pegar-o-valor-do-select).
*/


//"permitir o usuário escolher os filtros", mas que filtros(?) => const filter

const filter =  document.querySelector('#filtro-da-foto');

const image = document.querySelector('.foto-anotada > img');


//atribuir o filtro à imagem

filter.addEventListener('input', e => {
    
    image.style.filter = filter.value;
});

//Fim Exercicio 4
/*
### Desafio 1: Trocar a foto por outro arquivo
Há um `<input type="file">` que permite ao usuário escolher um arquivo
de seu computador. Faça com que o usuário possa escolher uma imagem para substituir a foto.
*/

const imageSelector = document.querySelector('#imagem');


imageSelector.addEventListener('change', (event) => {    
    const fileList = event.target.files;   //uma lista com os arquivos a serem lidos ao selecionar as imagens

    readImage(fileList[0], image);
  });

//mas ainda estaria pendente de ler uma imagem qualquer recebida

function readImage(file, image){

    //teste para verificar se é mesmo um arquivo de imagem e não de outro tipo
    /*Veja o artigo a seguir e tente identificar um código
nele que faz o que você precisa: deixa usuário escolher um arquivo e
o coloca como uma imagem no lugar da foto dos pokémons.

Referência: https://www.html5rocks.com/en/tutorials/file/dndfiles/
    */

    if (file.type && !file.type.startsWith('image/')) {
        console.log('This file is not an image.', file.type, file);  
        return; 
    } 

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {

        image.src = event.target.result;
    });
    reader.readAsDataURL(file);
    }

//Fim Desafio