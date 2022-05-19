import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'process'
const rl = readline.createInterface({ input, output })

let soma = 0
let count = 0
let media = 0

while (true) {
    let strNota = await question(`Digite o valor da ${count + 1}° nota ou N/n para cacular a média entre os valores inseridos:`)
    if (strNota.toUpperCase() == 'N') break
    let nota = parseFloat(strNota)

    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log(`${color.fg.red}[ ERROOOOOOOOOOOOU ] digite um número logo, para de enrolar KKKKKK.${color.reset}`)
        continue
    }

    soma = soma + nota
    count++
}

if (count <= 0) {
    console.log(`${color.fg.red}[ ERROR 404 ] digite um NÚMERO seu bobo.${color.reset}`)
    process.exit()
}

media = soma / count
console.log(`[ RESULTADO ] os valores foram desse jeito rapaz.`, media)
process.exit()
