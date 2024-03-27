const money = parseFloat(prompt("Digite quanto de dinheiro você tem: "))
const valorDoCombustivel = parseFloat(prompt("DIgite o preço do combustivel: "))
const km = parseFloat(prompt("Digite a média de quantos Km por Litro seu veículo faz: "))

const litroTotal = money / valorDoCombustivel

const kmTotal = litroTotal * km

alert(
    `Resultado: \nCom ${money} Você consegue comprar: \n${litroTotal} Lts de Combutivel\ne percorrer ${kmTotal} Km no total.\n\nBoa viagem!` 
)

