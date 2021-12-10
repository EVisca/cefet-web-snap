//Exercicio 0 - Ocultar/mostrar marcações

//1º criar const para uso


/*
  Se reparar o código HTML, verá que o `<input type="checkbox">` inclusive possui como `value` o nome dessa classe que você pode criar:
  ```html
  <label>ocultar marcações: 
    <input type="checkbox" id="visibilidade-das-marcacoes" value="marcacoes-ocultas">
  </label>
  ```
*/
const elementView = document.querySelector('#visibilidade-das-marcacoes');
const elementBody = document.querySelector('body');

//posições horizontais e verticais dos elementos
const xElement = document.querySelector('#x-da-marcacao');
const yElement = document.querySelector('#y-da-marcacao');
//widht e height
const elementWidth = document.querySelector('#largura-da-marcacao');
const elementHeight = document.querySelector('#altura-da-marcacao');
//Titulo e Conteúdo da marcação
const elementTitle = document.querySelector('#titulo-da-marcacao');
const elementContent = document.querySelector('#conteudo-da-marcacao');
//Cor p/ marcação
const elementColor = document.querySelector('#cor-da-marcacao');
//Formato
const formatoMarcacao = document.querySelectorAll('[name="formato-da-marcacao"]');


//com o toggle, fica num "0 e 1" e em diante
elementView.addEventListener('click', () =>{    
    const elementCheck = elementView.checked;
    elementBody.classList.toggle(elementView.value, elementBody);    
})
/*
### Megaexercício 2: Selecionar marcação e preencher controles

Em `script/controles-marcacao.js`, torne possível que o usuário selecione¹ uma `.marcacao` clicando nela. A marcação selecionada deve ter a classe `selecionada` adicionada a ela (aí fica com a borda amarelinha).

Uma vez selecionada, preencha os campos de `section.controles` com os respectivos valores:
1. x, y, largura e altura: vêm do `style` da marcação, das propriedades `left, top, width, height`
   - Observação: os valores recuperados do `style` do elemento possuem valor e unidade de medida (eg, '200px'). Contudo, ao definir o `value` dos `input[type="number"]`, deve-se passar apenas o número. Veja [como extrair apenas o número de uma string](#como-extrair-apenas-o-número-de-uma-string) no FAQ.
1. título, conteúdo e cor: vêm dos atributos de dados da `.marcacao`
1. formato da marcação: deve-se verificar as classes que a `.marcacao` possui:
   - Se ela tiver `.formato-oval`, deve-se "checkar" o `input[type="radio"]` cujo `value` é `formato-oval`
   - Senão, checkar o que tem `value="formato-retangular"`

¹Selecionar uma marcação: quando alguma `.marcacao` sofrer um `click`, remova a classe `selecionada` de quem é a marcação atual e insira essa mesma classe naquela que foi alvo do `click`.

*/

//mesmo for do exercicio 1

for (let marcacaoElement of marcacoes){
      
  marcacaoElement.addEventListener('click', () => {     
      
      marcacoes.forEach(function(element){
          element.classList.remove('selecionada');
      });
      
      marcacaoElement.classList.add('selecionada');
      //value para left e top
      xElement.value = parseInt(marcacaoElement.style.left);
      yElement.value = parseInt(marcacaoElement.style.top);
      //Width e Height
      elementWidth.value =  parseInt(marcacaoElement.style.width);
      elementHeight.value = parseInt(marcacaoElement.style.height);
      //value p/ titulo
      elementTitle.value = marcacaoElement.dataset.titulo;
      //value p/ content
      elementContent.value = marcacaoElement.dataset.conteudo;
      //value p/ cor
      elementColor.value = marcacaoElement.dataset.cor;

      //geral formato pro retangular e oval

      let format = marcacaoElement.classList.contains("formato-oval") ? "formato-oval" : "formato-retangular";

      let elementFormat= document.querySelector(`[value='${formato}']`);

      elementFormat.checked = true;         
  });



} // Fim exercicio 2

//Exercicio 3

/*
### Megaexercício 3: Controles alteram marcação

De forma análoga ao exercício anterior, no mesmo arquivo `script/controles-marcacao.js`, agora você deve permitir
 o usuário alterar os controles e isso refletir no estado da `.marcacao.selecionada`.

Os campos que devem alterar o estado da `.marcacao.selecionada` são os mesmos do exercício anterior. Observe que:
1. Campos x, y, largura e altura: devem alterar o `style` da marcação
   - Lembre-se de concatenar o valor numérico do campo com a unidade de medida `px`
1. Campos título, conteúdo e cor: definem atributos de dados da marcação
1. Botão de rádio de formato: remove as classes de formato e insere novamente apenas aquela cujo botão
 de rádio está "checkado"
*/
    //Element x
    xElement.addEventListener('input', () => {

        const marcacaoSelecionada = document.querySelector('.marcacao.selecionada');
        marcacaoSelecionada.style.left = `${xEl.value}px`;
    });
    //Element y
    yElement.addEventListener('input', () => {

      const marcacaoSelecionada = document.querySelector('.marcacao.selecionada');
      marcacaoSelecionada.style.top = `${yEl.value}px`;
    });

    //Largura
    elementWidth.addEventListener('input', () => {

      const marcacaoSelecionada = document.querySelector('.marcacao.selecionada');
      marcacaoSelecionada.style.width = `${larguraEl.value}px`;
    });
    //Altura
    elementHeight.addEventListener('input', () => {

      const marcacaoSelecionada = document.querySelector('.marcacao.selecionada');
      marcacaoSelecionada.style.height = `${alturaEl.value}px`;
    });
    //Título
    elementTitle.addEventListener('input', () => {

      const marcacaoSelecionada = document.querySelector('.marcacao.selecionada');
      marcacaoSelecionada.dataset.titulo = tituloEl.value;
    });
    //Conteudo
    elementContent.addEventListener('input', () => {

      const marcacaoSelecionada = document.querySelector('.marcacao.selecionada');
      marcacaoSelecionada.dataset.conteudo = conteudoEl.value;
    });
    //Cor
    elementColor.addEventListener('input', () => {

      const marcacaoSelecionada = document.querySelector('.marcacao.selecionada');
      marcacaoSelecionada.dataset.cor = corEl.value;
    });


    //for para atribuir os formatos
    for (let elementFormat of formatoMarcacao){
      formatoMarcacaoEl.addEventListener('click', () => {

          const elementFormat = document.querySelector('.marcacao.selecionada');
          let formato = elementFormat.classList.contains("formato-oval") ? "formato-oval" : "formato-retangular";
          elementFormat.classList.remove(formato);
          elementFormat.classList.add(formatoMarcacaoEl.value);
          
      })
    }

    //Fim exercicio 3(?)