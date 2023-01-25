//user chooses rock, paper and scissor on the interface
//function playround is exectuted using what user selected and getComputerChoice
//function getComputerChoice generates a choice between rock, paper and scissor
//function compare the choices of the the user and the computer
    //the winner gets a point
    //if it`s a draw no one gets a point
//the one who gets 5 points first wins the game
//Interface displays round number, choices, result of the round, points of both players and game winner

function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissor'];
    return options[Math.floor(Math.random() * options.length)];
}


function playRound(playerSelection, computerSelection){

    if (numRound == 0) {
        document.getElementById("result").innerHTML = '';
    }

    numRound++;

    document.getElementById("numRound").innerHTML = 'Round ' + numRound;
    
    if (playerSelection === computerSelection) {

        document.getElementById("round").innerHTML = 'You choose: ' + playerSelection +
                                                     '<br>Computer choose: ' + computerSelection;
        document.getElementById("roundResult").innerHTML = 'It is a Draw!';
        document.getElementById("roundResult").style.color = "black";

        return 0;

    } else if ((playerSelection == 'Rock' && computerSelection == 'Paper')      ||
               (playerSelection == 'Paper' && computerSelection == 'Scissor')   ||
               (playerSelection == 'Scissor' && computerSelection == 'Rock'))   {
        
        document.getElementById("round").innerHTML = 'You choose: ' + playerSelection +
                                                     '<br>Computer choose: ' + computerSelection; 
        document.getElementById("roundResult").innerHTML = 'You lost! '+ computerSelection +' beats '+ playerSelection;
        document.getElementById("roundResult").style.color = "red";       

        return 1;

    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissor')    ||
               (playerSelection == 'Paper' && computerSelection == 'Rock')      ||
               (playerSelection == 'Scissor' && computerSelection == 'Paper'))  {
        
        document.getElementById("round").innerHTML = 'You choose: ' + playerSelection +
                                                     '<br>Computer choose: ' + computerSelection;  
        document.getElementById("roundResult").innerHTML = 'You won! '+ playerSelection +' beats '+ computerSelection;
        document.getElementById("roundResult").style.color = "green";                                                    
        return 2;
    }
    
}

function keepScore (winner) {

    if (winner == 1) {
        cPoints++;
    } else if (winner == 2 ) {
        pPoints++;
    }

    document.getElementById("score").innerHTML = 'Your points: ' + pPoints +
                                                 '<br> CPU points: ' + cPoints;

    if (cPoints == 5){

        document.getElementById("result").innerHTML = 'You lost the game!';
        document.getElementById("result").style.color = "red";
        cPoints = 0;
        pPoints = 0;
        numRound = 0;

    } else if (pPoints == 5) {
        
        document.getElementById("result").innerHTML = 'You won the game!';
        document.getElementById("result").style.color = "green";
        cPoints = 0;
        pPoints = 0;
        numRound = 0;

    }

}

    let pPoints = 0;
    let cPoints = 0;
    let numRound = 0;
    let winner;

    let playerSelection;

    document.getElementById('rock').addEventListener("click", function() {
        playerSelection = 'Rock';
        winner = playRound('Rock', getComputerChoice());
        keepScore(winner);
    });
    document.getElementById('paper').addEventListener("click", function() {
        playerSelection = 'Paper';
        winner = playRound('Paper', getComputerChoice());
        keepScore(winner);
    });
    document.getElementById('scissor').addEventListener("click", function() {
        playerSelection = 'Scissor';
        winner = playRound('Scissor', getComputerChoice());
        keepScore(winner);
    });


