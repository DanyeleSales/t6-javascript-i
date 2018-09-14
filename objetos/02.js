// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon
const MewPokemon = {
    name: "Mew",
    namejapones:"Mew",
    number:254,
    grupo:"lendário",
    tipo:"psíquico",
    Cor:"cor rosa",
    picture:"https://www.kisspng.com/png-pokmon-x-and-y-pokmon-go-pikachu-mew-mew-3618707",

}




// 2.
// Printe no console a seguinte
// frase: "Hello, my name is < >.
// And my name in Japanese is < >."
 console.log("Hello, my name is", MewPokemon.name,"And my name in Japanese is", MewPokemon.namejapones)

// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `can_fly` 
// (ou algo do tipo) e defina
// ela como `true` ou `false`.
MewPokemon.can_fly= true;



// 4.
// Adicione um método ao seu pokemon
// chamado `fly` que retorna "Sorry,
// I can't fly" ou "Flyyyyiinnngggg!".

MewPokemon.fly= function () {]

    if (this.can_fly){
    return "Sorry, I can't fly"
  } else{
      return "Flyyyyiinnngggg!"
  }
}


// 5.
// Adicione um método chamado
// `do_something` ao seu pokemon
// que retorna randomicamente uma 
// das Strings "FIGHT", "BAG" ou "RUN".
MewPokemon.do_somenthing= function()  {
   let x = Math.floor (Math.random() *3 )
    if (x === 0) {
        return "FIGHT"
    }
    else if (x === 1){
        return "BAG"
    }
    else { 
        return "RUN"
    }
}
//ou
MewPokemon.do_somenthing = function (){
    let acoes = []
    return acoes [Math.floor(Math.random () * acoes.length)]
}

// 6.
// Adicione um método chamado
// `ask` ao seu pokemon que printa
// no console "What will < > do?" e
// retorna o resultado do metodo
// `do_something`.

MewPokemon.ask= function(){
    console.log ("What will", MewPokemon.do_somenthing(),"do?")
}

MewPokemon.ask= function(){
console.log (`What will ${this.nome} do?` )
return this.do_somenthing ()
}

// 7. 
// Printe todas as propriedades 
// do seu pokemon no console.


for (const key in MewPokemon) {
    console.log(key, MewPokemon[key])
} 
//ou
for (const key in MewPokemon){
console.log (`${key} : ${MewPokemon[key]}`)
}

// 8. 
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>

for (const key in MewPokemon) {
    console.log(key, MewPokemon
        [MewPokemon,key])
} 
//ou
for (const key in MewPokemon){
    console.log (`${key}, ${MewPokemon} : ${MewPokemon[key]}`)
    }


//9.
// Crie uma funcaoo construtora de um pokemon generico.
// function (nome, nome_japones){}

function Pokemon (nome, nome_japones){
    this.nome = nome
    this.nome_japones = nome_japones

    console.log("Hello, my name is", Pokemon.nome,"And my name in Japanese is", Pokemon.nome_japones)

    Pokemon.ask= function(){
        console.log (`What will ${this.nome} do?` )
        return this.do_somenthing ()
        }
        
    Pokemon.do_somenthing = function (){
        let acoes = []
        return acoes [Math.floor(Math.random () * acoes.length)]
    }

}