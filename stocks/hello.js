console.log('Hello NodeJS');

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtro(numeros, funcao) {
    return funcao(numeros);
}

const pares = (numeros) => {
    return numeros.filter(numero => numero % 2 == 0);
}

function impares(numeros) {
    return numeros.filter(numero => numero % 2 == 1);
}

console.log(filtro(numeros, pares));
console.log(filtro(numeros, impares));
console.log(filtro(
    numeros, 
    (parangaricutirimiruaru) => 
    parangaricutirimiruaru.filter(
        numero => numero % 3 == 0)
    )
);