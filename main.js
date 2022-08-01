const jugador1=(prompt('Escriba su nombre')).toUpperCase();
const jugador2=(prompt('Escriba su nombre')).toUpperCase();

let numeroJugador1=Math.floor(Math.random()*10)
let numeroJugador2=Math.floor(Math.random()*10)


console.log(`${jugador1} tu numero es: ${numeroJugador1}`)
console.log(`${jugador2} tu numero es: ${numeroJugador2}`)

let primerTurno=''
let segundoTurno=''

if(numeroJugador1>numeroJugador2){
    console.log(`${jugador1} jugas PRIMERO :D`)
    console.log(`${jugador2} jugas SEGUNDO :C`)
    primerTurno=jugador1
    segundoTurno=jugador2
}else{
    console.log(`${jugador2} jugas PRIMERO :D`)
    console.log(`${jugador1} jugas SEGUNDO :C`)
    primerTurno=jugador2
    segundoTurno=jugador1
}

let dadoPrimerJugador=Math.floor(Math.random()*10);
alert(primerTurno+' tu numero es '+ dadoPrimerJugador)
let dadoSegundoJugador=Math.floor(Math.random()*10);
alert(segundoTurno+' tu numero es '+ dadoSegundoJugador)


let primerLugar='';
let segundoLugar='';

if(dadoPrimerJugador>dadoSegundoJugador){
    primerLugar=jugador1
    segundoLugar=jugador2
}else{
    primerLugar=jugador2
    segundoLugar=jugador1
}

console.log(`El 1er lugar es para ${primerLugar} , FELICIDADES!`)
console.log(`El 2do lugar es para ${segundoLugar} , suerte la proxima..!`)