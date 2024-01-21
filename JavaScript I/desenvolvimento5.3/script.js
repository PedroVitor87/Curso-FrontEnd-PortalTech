let bodyHTML = document.querySelector('body')
let tituloH1 = document.createElement('h1')

tituloH1.innerText = `Desenvolvimento 5.3`
bodyHTML.appendChild(tituloH1)
tituloH1.id = 'titulo'

let mainTag = document.createElement('main')
bodyHTML.appendChild(mainTag)

let sectionTag = document.createElement('section')
mainTag.appendChild(sectionTag)

const produtoExibir = {
    nome: "Notebook Acer Aspire 5",
    descricao: "Notebook Acer Aspire 5 A515-54-33EN, com processador Intel Core i3 de decima geração, acompanhado de um armazenamento de 256GB SSD NVMe x4 podendo fazer upgrades de ate 2TB, Junto de uma memoria RAM de 4GB DDR4 Expansível de ate 16GB, tendo uma tela de 15.6 polegadas com resolução FULL HD (1920 x 1080), sendo seu sistema operacional Windows 11 home 64-bits",
    preco: 2000.99
};

sectionTag.innerHTML=`
    <h2>${produtoExibir.nome}</h3>
    <div>
        <img src="https://www.saldaodainformatica.com.br/10012-medium_default/notebook-acer-aspire-5-a515-54-33en-intel-core-i3-10110u-armazenamento-256gb-ssd-nvme-x4-tela-156-windows-11.webp"></img>
        <p>${produtoExibir.descricao}</p>
        <p>R$ ${produtoExibir.preco}</p>
    </div>
`

console.log(bodyHTML)