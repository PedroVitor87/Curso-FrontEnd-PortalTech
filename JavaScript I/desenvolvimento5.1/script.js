let titulo = document.querySelector('#titulo');
let link = document.querySelector('a');

titulo.innerText = 'Site em Desenvolvimento'
link.innerText = 'Site em Desenvolvimento.... Aguarde alguns dias'

let listaOrdenada = document.querySelector('#lista-ordenada')
listaOrdenada.innerHTML = `
    <li><a href="https://prozeducacao.com.br">Tópico 1</a></li>
    <li><a href="https://prozeducacao.com.br">Tópico 2</a></li>
    <li><a href="https://prozeducacao.com.br">Tópico 3</a></li>

`

let listaNaoOrdenada = document.querySelector('ul')
listaNaoOrdenada.innerHTML = `
    <li>List Não Ordenada 1</li>
    <li>List Não Ordenada 2</li>
    <li>List Não Ordenada 3</li>
`