let buttons = document.querySelectorAll('.game button');
const currentPlayer = document.querySelector(".currentPlayer");
const currentWinner = document.querySelector(".currentWinner");
let jogadas = [];
let jogador = "X"
let position = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]

]



function start() {
    jogador = "X"
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${jogador}`;
    buttons.forEach((celula, i) => {
        celula.innerHTML = ""

        celula.addEventListener("click", newMove)
    })
    jogadas = []

}

function newMove(e) {
    const index = e.target.getAttribute('data-i')
    e.target.innerHTML = jogador;
    e.target.removeEventListener("click", newMove)

    jogadas[index] = jogador;

 

    if (jogador === 'X') {
        jogador = 'O'
    } else {
        jogador = 'X'
    }
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${jogador}`;
    check()
}

function check() {
    let ultimaJogada = "";

    ultimaJogada = jogador === 'X' ? 'O' : 'X';

const items = jogadas
.map((item , i)=> [item,i])
.filter((item)=> item[0] === ultimaJogada)
.map((item)=> item[1])

console.log(items)

for(pos of position){
    if (pos.every((item) => items.includes(item))) {
        console.log(pos)
        currentWinner.innerHTML = `JOGADOR Vencedor: ${ultimaJogada}`;
        start();
        return;
}
}
if(jogadas.filter((item)=>item).length === 9){
    currentWinner.innerHTML = `Deu empate`;
start();
return
}

}
// console.log(jogadas)
start()








