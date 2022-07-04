// 1. Realiza un programa de juego de dados
// Queremos programar un juego de dados en una página web.
// El usuario empieza con 500 pesos para poder apostar.
// El usuario decide a qué número apuesta del 1 al 6, y también qué cantidad
// de pesos quiere apostar.
// Se “lanza” un dado(asignación al azar de un número del 1 al 6)
// Si el usuario acierta el número, gana el doble de lo que h a apostado. Si no
// acierta, pierde todo lo apostado.
// El juego acaba cuando el usuario llega a 0 pesos o al llegar a 1000 pesos.


let initial = 500

let playerName = document.getElementById ("playerName ")

const initialMoney = document.getElementById("initialMoney");




let gamble = (randomNumber) => {
    
    let gamble = parseInt ( document.getElementById("gamble").value);
    
    if (gamble < 1 || gamble > 6) {

        return alert("Numero ingresado debe ser entre 1 y 6")
    }

    let amount = parseInt ( document.getElementById("amount").value);

    if (gamble === randomNumber) {

        initial = initial - amount + (amount * 2)


    }

    else {

        initial = initial - amount 

    }

    if (initial <= 0 ) {

        alert('Perdiste!!!')
    }

    else if (initial >= 1000) {

        alert ('Ganaste, fin del juego!!!')
    }

    initialMoney.innerHTML = `te quedan ${initial}`
    
}






const rollTheDice = () => {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src",
        "dice" + randomNumber1 + ".png");


    gamble(randomNumber1)

}