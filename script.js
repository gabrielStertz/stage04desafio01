const numberOne = Number(prompt('Digite o primeiro número:'))
const numberTwo = Number(prompt('Digite o segundo número:'))
const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo
const isPair = (sum % 2) == 0
const isDifferent = numberOne != numberTwo
alert(`A soma dos dois números é : ${numberOne} + ${numberTwo} = ${sum}`)
alert(`A subtração dos dois números é : ${numberOne} - ${numberTwo} = ${sub}`)
alert(`A multiplicação dos dois números é : ${numberOne} * ${numberTwo} = ${multi}`)
alert(`A divisão dos dois números é : ${numberOne} / ${numberTwo} = ${div.toFixed(2)}`)
alert(`O resto da divisão dos dois números é : ${numberOne} % ${numberTwo} = ${restDiv}`)
if(isPair){
  alert(`A soma dos dois números é par (${sum})`)
} else{
  alert(`A soma dos dois números é impar (${sum})`)
}
if(isDifferent){
  alert('Os dois números são diferentes')
} else{
  alert('Os dois números são iguais')
}