
//definimos o marcador do x e da bolinha, elementos que seram inseridos no jogo ao selecionar sua jogada
let x = document.querySelector(".x");
let o = document.querySelector(".o");
//caixas do jogo
let boxes = document.querySelectorAll(".box");
//botões do jogo
let buttons = document.querySelectorAll("#buttons-container button");
//mensagem que vai aparecer na tela após o resultado do Jogo
let messageContainer = document.querySelector("#message");
//Vou separar o texto da mensagem que vai aparecer na tela após o resultado do Jogo
let messageText = document.querySelector("#message p");
//jogador 1 e jogador 2, pra isso criei uma variavel sem valor nenhum, vou usar para quando precisar escolher entre o Jogador fisico e a IA
let secondPlayer;
//CONTADOR DE JOGADAS
/* Vou criar um contador pra saber a vez de quem jogar, vou começar zerado e vou incrementando conforme for seguindo na lógica */
let player1 = 0;//Player x
let player2 = 0;//Player bolinha

//QUANDO ALGUEM CLICA NA CAIXA
for(let i = 0; i < boxes.length; i++) { /*estrutura de repetição for, vai chamar todos os box um por um e add um list*/
   boxes[i].addEventListener("click", function() {
   //Adicionando o evento de click aos boxes
   //adiciono um list para todos os blocos, pois eles vao originar os simbolos
   //pra saber se é o player um ou o player 2 que vai jogar
   //caixa da vez, vou inteirando entre todas, evento click
   //tenho uma função anonima que vai fazer a logica de quando alguem clicar na caixa

   let el = checkEl(player1, player2); //variavel que sempre vai mudar, pra saber qual é o player crio um elemento que determina o x ou a bolinha
   
   if(this.childNodes.length == 0) { //PRA EVITAR DE ADICIONAR VARIOS DENTRO DOS BOXES, resolver problema de duplicidade

    let cloneEl = el.cloneNode(true) //pra clonar a variavel toda vez que rolar o loop e pra clonar todo o elemento, primeiro clonei o elemento pra adicionar ele depois
    this.appendChild(cloneEl); //pra adicionar o elemento
    
//PRA COMPUTAR A JOGADA, ALTERNAR ENTRE OS ELEMENTOS
    if(player1 == player2) {//se
        player1++ //incrementando o primeiro player, crio uma diferença e na proxima ja vai mudar
        
        if(secondPlayer == 'ai-player') {
            //Função executar a jogada
            computerPlay();

            player2++
        }
    } else {//senao
        player2++ //crio uma igualdade depois pra voltar para o x
    }
   }

//CHECA QUEM VENCEU
    checkWinCondition(); //checa a condição vitória
   
   });
}

//EVENTO PARA SABER SE É 2 PLAYERS OU IA
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }
        setTimeout(function() {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);
    });
}

//VE QUEM VAI JOGAR
function checkEl(player1, player2) {
    if(player1 == player2) { //se //Player 1 é o x
        el = x; //quando atingir a logica de igualdade
     } else { //senao //Player 2 é a bolinha, o
        el = o; //vai ser bolinha quando tiver diferença entre as logicas
     }
     
     return el; //retorno o elemento com base no que foi definido no if e else
}

//VE QUEM GANHOU, FAZENDO A LOGICA DOS CAMPOS GANHADORES PREENCHIDOS
function checkWinCondition() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            //x
            declareWinner('x');
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            //x
            declareWinner('x');
        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            //x
            declareWinner('x');
        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    //VERTICAL
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            //x
            declareWinner('x');
        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            //x
            declareWinner('x');
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            //x
            declareWinner('x');
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    //DIAGONAL
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            //x
            declareWinner('x');
        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            //x
            declareWinner('x');
        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    //DEU VELHA
    /* Vou fazer um contador que vai executar todos os elementos um por um, como ta por fim de toda a lógica eu vou checar se deu velha. 
    Se um numero do contador der 9, os nove elementos preenchidos e nenhuma das condições dos ifs acima deu certo, então deu velha. Ai o
    contador vai reiniciar a grade. */

    let counter = 0

    for (let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter++;//vai incrementando toda vez
        }
    }

    if(counter == 9) {//se uma hora chegar a 9 vai dar velha
        declareWinner('deu velha');
        console.log('deu velha');
    }

}

//LIMPAR O JOGO, DECLARA O VENCEDOR E ATUALIZA O PLACAR
function declareWinner(winner) { //função pra declarar o vencedor
     let scoreboardx = document.querySelector("#scoreboard-1")
     let scoreboardy = document.querySelector("#scoreboard-2")
     let msg = '';

     if(winner == 'x') {
        scoreboardx.textContent = parseInt(scoreboardx.textContent) + 1;
        msg = "O Jogador 1 Venceu!";
     } else if(winner == 'o') {
        scoreboardy.textContent = parseInt(scoreboardy.textContent) + 1;
        msg = "O Jogador 2 Venceu!";
     } else {
        msg = "Deu Velha!";
     }

    //EXIBIR MENSAGEM NA TELA
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    //ESCONDER MENSAGEM
    setTimeout(function() {
       messageContainer.classList.add("hide");
    }, 3000);

    //ZERA AS JOGADAS
    player1 = 0;
    player2 = 0;

    //REMOVE O X E BOLINHA
    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
} 

//EXECUTAR A LÓGICA DA JOGADA DO CPU
function computerPlay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i++) {
       let randomNumber = Math.floor(Math.random() * 5);
       
       //só preencher se etiver vazio o filho
       if(boxes[i].childNodes[0] == undefined) {
        if(randomNumber <= 1) {
            boxes[i].appendChild(cloneO);
            counter++;
            break;
        }
        //Checagem de quantas estão preenchidas
       } else {
         filled++;
       }
    }

    if(counter == 0 && filled < 9) {
        computerPlay();
    }
}

















