import "../scss/style.scss"; 

document.addEventListener("DOMContentLoaded", function () {
  const rock = 0;
  const paper = 1;
  const scissor = 2;

  //Para cambiar las imagenes de cada jugador:
  const playerWeapon = document.querySelector("#playerWeapon");
  const computerWeapor = document.querySelector("#computerWeapon");

  const rockBtn = document.querySelector("#rock");
  const paperBtn = document.querySelector("#paper");
  const scissorBtn = document.querySelector("#scissor");

  //Eventos a cada boton
  
  rockBtn.addEventListener("click", () => {
    playerWeapon.src = "./public/assets/img/rock.svg";
    removeBlur();

    computerTurn(rock);
  });

  paperBtn.addEventListener("click", () => {
    playerWeapon.src = "./public/assets/img/paper.svg";
    removeBlur();
    computerTurn(paper);
  });

  scissorBtn.addEventListener("click", () => {
    playerWeapon.src = "./public/assets/img/scissor.svg";
    removeBlur();
    computerTurn(scissor);
  });

  const removeBlur = () => {
    playerWeapon.classList.remove('game__turn-icon--blur');
    computerWeapor.classList.remove('game__turn-icon--blur');
  }

  //Funcion Turno del Computador
  const computerTurn = (playerWeapon) => {
    let randomWeapon = 0;
    const interval = setInterval(() => {
      randomWeapon = Math.floor(Math.random() * 3);
      
      if (randomWeapon === 0) {
        computerWeapor.src = "./public/assets/img/rock-pc.png";
      }
      if (randomWeapon === 1) {
        computerWeapor.src = "./public/assets/img/paper-pc.png";
      }
      if (randomWeapon === 2) {
        computerWeapor.src = "./public/assets/img/scissor-pc.png";
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      playGame(randomWeapon, playerWeapon)
    }, 1000);
  };

  let playerScore = 0;
  let computerScore = 0;
  const winner = document.querySelector("#winner");
  const score = document.querySelector("#score");

  const playGame = (computerChoice,playerChoice) => { 
    if (playerChoice === computerChoice) {
      score.textContent = `${playerScore} - ${computerScore}`;
      winner.textContent = "Empate";
      setTimeout(() => {
        winner.textContent = "";
      }, 1000);
      return;
    }

    if (
      (computerChoice === rock && playerChoice === paper) ||
      (computerChoice === paper && playerChoice === scissor) ||
      (computerChoice === scissor && playerChoice === rock)
    ) {
      playerScore++;
      score.textContent = `${playerScore} - ${computerScore}`;
    } else {
      computerScore++;
      score.textContent = `${playerScore} - ${computerScore}`;
    }

    if (playerScore >= 3) {
      winner.textContent = "Ganaste!";
      newGame();
    }
    if (computerScore >= 3) {
      winner.textContent = "Perdiste!";
      newGame();
    }
  };

  const newGame = () => {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;

    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.style.visibility = "visible";
    playerWeapon.classList.add('game__turn-icon--blur');
    computerWeapor.classList.add('game__turn-icon--blur');
    
    newGameBtn.addEventListener('click', () => {
      newGameBtn.style.visibility = "hidden";
      rockBtn.disabled = false;
      paperBtn.disabled = false;
      scissorBtn.disabled = false;
      playerScore = 0;
      computerScore = 0;
      winner.textContent = "";
      score.textContent= "0 - 0";
    })
  }
});
