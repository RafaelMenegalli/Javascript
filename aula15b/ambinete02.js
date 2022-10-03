var vetor = [6, 8, 3, 5, 7, 1, 2, 9]
vetor.push(4)
vetor.sort()
console.log(vetor)
console.log(`O seu vetor possui ${vetor.length} Posiçõees`)
for(let pos = 0; pos <= vetor.length; pos++){
    console.log(`O numero na posição ${pos} é ${vetor[pos]}`)
}