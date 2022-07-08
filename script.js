//1

function ola(){
    console.log("oi")
}

ola()

//2
function nome(name){
    console.log("Meu nome é ${name}")
}

nome("Limão")

//3
function about (nome, idade, musica){
    console.log("Meu nome é ${nome}, tenho ${idade} e minha música favorita é ${musica}")
}

about("Limão", "31", "Valhalla by Blind Guardian")

//4
function faves (filme, song){
    console.log("Meu filme favorito é ${filme} e minha música favorita é${song}")
}

faves("The Lord of the Rings", "Valhalla by Blind Guardian")

//5
function triple (num){
    num*=3
    return num
}
let num =9
console.log(`${num}`)
