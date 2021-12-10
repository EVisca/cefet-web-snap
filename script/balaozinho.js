// ### Exercício 1: Balãozinho com informações da marcação
/*
No arquivo `script/balaozinho.js`, crie código para:
    1. Recuperar o `#balaozinho`
    1. Recuperar todas as `.marcacao`
    1. Para cada uma:
       1. Registrar função para evento de "mouse entrou"
          1. Determinar qual das marcações foi alvo do evento
          1. Definir seu conteúdo (FAQ: [como definir o conteúdo de um elemento](#como-definir-o-conteúdo-de-um-elemento)) como os atributos de dados referentes ao título e conteúdo da marcação alvo do evento
          1. Definir a `color` do balãozinho com o valor do `data-cor` da marcação
       1. Registrar função para evento de "mouse saiu"
          1. Simplesmente remover todos os filhos do `#balaozinho`
             - No FAQ tem [como limpar um elemento](#como-limpar-um-elemento)
       1. Registrar função para evento de "mouse movimentou"
          1. Definir as propriedades `left`, `top` do `#balaozinho` de acordo com a posição do mouse
             - O FAQ mostra [como pegar a posição do mouse](#como-pegar-a-posicao-do-mouse)
             - Não se esqueça que `e.pageX` e `e.pageY` são números sem unidade de medida e que você deve concatená-los com `px` quando for definir os valores de `left` e `top`

*/
//const iniciais

const balaozinho = document.querySelector('#balaozinho');

const marcacoes = document.querySelector('.marcacao');

//fazer um loop pra atrubuir cada função(?)
//let i = 0
//marcacaoElement => marcacoes
for( let marcacaoElement of marcacoes){ 
        
    //evento para mover o mouse
    marcacaoElement.addEventListener('mousemove', (e) => {

        balaozinho.style.left = `${e.pageX}px`; //eixo X
        balaozinho.style.top = `${e.pageY}px`; // eixo Y
    });


    //evento para "move out
                                                //(e)
    marcacaoElement.addEventListener('mouseout', () => {

            balaozinho.innerHTML = '';
    });

    marcacaoElement.addEventListener('mouseover',(e)=> 
    {
        marcacaoElement = e.currentTarget;

        balaozinho.innerHTML = `<h2>${marcacaoElement.dataset.titulo}</h2>

                                <p>${marcacaoElement.dataset.conteudo}</p>`;
        balaozinho.style.color = marcacaoElement.dataset,cor;

    });

}
