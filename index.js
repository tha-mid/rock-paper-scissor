//user input choice between rock, paper and scissor in a prompt
//program trim and transform to lowercase
//function getComputerChoice generates a choice between rock, paper and scissor
//function compare the choices of the the user and the computer
    //the winner gets a point
    //if it`s a draw no one gets a point
//there's 5 rounds and in the end it's announced the winner

function capitalize(str) {
    let cont = str.length;
    let newStr;

    for (var i = 0; i < cont; i++) {
        if (i == 0) {
            newStr = str[0].toUpperCase();
        }
        else {
            newStr = newStr + str[i].toLowerCase();
        }
    }
    return newStr;
}

function cleanPlayerSelection(playerSelection){
    playerSelection = playerSelection.trim();
    playerSelection = playerSelection.toLowerCase(); 
    return capitalize(playerSelection);  
}


function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissor'];
    return options[Math.floor(Math.random() * options.length)];
}
//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){

    console.log('You choose:' + playerSelection);
    console.log('Computer choose:' + computerSelection);
    
    if (playerSelection === computerSelection) {

        console.log('It is a Draw!');
        return 0;

    } else if ((playerSelection == 'Rock' && computerSelection == 'Paper')      ||
               (playerSelection == 'Paper' && computerSelection == 'Scissor')   ||
               (playerSelection == 'Scissor' && computerSelection == 'Rock'))   {
        
        console.log('You lost! '+ computerSelection +' beats '+ playerSelection);
        return 1;

    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissor')    ||
               (playerSelection == 'Paper' && computerSelection == 'Rock')      ||
               (playerSelection == 'Scissor' && computerSelection == 'Paper'))  {
        
        console.log('You won! '+ playerSelection +' beats '+ computerSelection);
        return 2;
    }
    
}

//function game(){

    let pPoints = 0;
    let cPoints = 0;
    let winner;

    console.log('start');

    let playerSelection; // = cleanPlayerSelection(prompt("Choose between Rock, Paper and Scissor"));
    //let computerSelection = getComputerChoice();

    //console.log('computerSelection ' + getComputerChoice());

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

    // if (winner == 1) {
    //     cPoints++;
    // } else if (winner == 2 ) {
    //     pPoints++;
    // }
            
    //console.log('Player points:' + pPoints + ' / Computer points:' + cPoints);            
        
    

    // if (cPoints == 5) {
    //     console.log('Computer won the game!');
    // } else if (pPoints == 5) {
    //     console.log('You won the game!');
    // } else {
    //     console.log('It is a draw! Both have ' + pPoints + ' points.');
    // }

//}

//game();


function keepScore (winner) {

    if (winner == 1) {
        cPoints++;
    } else if (winner == 2 ) {
        pPoints++;
    }

    if (cPoints == 5){
        console.log('Computer won the game!');
        cPoints = 0;
        pPoints = 0;
    } else if (pPoints == 5) {
        console.log('You won the game!');
        cPoints = 0;
        pPoints = 0;
    }

}
