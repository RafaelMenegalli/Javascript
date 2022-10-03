//Calculadno o fatorial de um Numero ex: fatorial de 5 = 5 X 4 X 3 X 2 X 1 =120

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        //let fat = fat * c
        fat *= c
    }
    return fat
}

var res = fatorial(5)
console.log(res)