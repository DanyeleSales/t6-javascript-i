// Escreva uma função
// em Javascript que recebe
// um nome, um pronome e um objeto
// e retorna "<nome> foi caminhar
// no parque. <pronome> encontrou
// <objeto>. <nome> decidiu levar
// <objeto> pra casa."
 let nome = "juliana"
 let pronome = "ela"
 let objeto= "bike"
 function parque (nome, pronome, objeto) {
     return  `${nome} foi caminhar no parque. ${pronome} encontrou ${objeto}. ${nome} decidiu levar ${objeto} pra casa.`

 }


function frase(nome, pronome, objeto) {
    return `${nome} foi caminhar
        no parque. ${pronome} encontrou
        ${objeto}. ${nome} decidiu levar
        ${objeto} pra casa.`
}

// Escreva uma função
// em Javascript que recebe
// um número qualquer e retorna
// a raiz quadrada dele.
    return Math.sqrt(num)
function sqrt(num) {
}

// Javascript que recebe um
// número qualquer e retorna
// a representação binaria dele.

function numbinario (num){
    return (num) .toString (2)
}

function binary(num) {
    let result = ""
    do {
        result = (num % 2) + result
        num = Math.floor(num / 2)
    } while (num > 0)
    return result
}

// Escreva uma função em Javascript
// que recebe uma lista de números
// e retorna o maior número da lista.
function lista (arr) {
	
        for (let i = 0; i < arr.length; i++) {
        let aux = arr[i]

            if (aux > 10000){
                return aux
            }
         }		
}



function max(arr) {
    let larger = -Infinity
    for (const item of arr) {
        if (typeof item !== "number") {
            throw "Por favor, forneça uma lista soó de nuúmeros."
        }
        if (item > larger) {
            larger = item
        }
    }
    return larger
}


// Escreva uma função em Javascript
// que vai checar se duas ou mais strings
// sao anagramas umas das outras.

"roma".split("")
["a", "m", "o", "r"]

"roma".split("").sort()
["a", "m", "o", "r"]

"roma".split("").sort().join("")
["a, m, o, r"]
function sortCharactersInString(str) {
    return str
        .split("")
        .sort(function(a, b) {
            a = a.toLowerCase()
            b = b.toLowerCase()
            return a.localeCompare(b)
        })
        .join("")
}

function areAnagrams(a, b) {
    if (a === undefined || b === undefined) {
        throw "Por favor, forneça pelo menos duas strings."
    }
    if (typeof a !== "string" || typeof a !== "string") {
        throw "Por favor, forneça uma lista só de Strings."
    }

    let first = sortCharactersInString(a)
    for (let i = 1; i < arguments.length; i++) {
        if (typeof arguments[i] !== "string") {
            throw "Por favor, forneça uma lista soó de Strings."
        }
        if (sortCharactersInString(arguments[i]) !== first) {
            return false
        }
    }

    return true
}

// Escreva uma função em Javascript
// que recebe o raio de um circulo
// e calcula o diametro, a circunferencia
// e a area dele.
function circleDimensions(r) {
    const diameter = r * 2
    const circunference = diameter * Math.PI
    const area = Math.PI * r * r
    return [ diameter, circunference, area ]
}