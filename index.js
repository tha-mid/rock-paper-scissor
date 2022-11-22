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

function game(){

    let playerPoints = 0;
    let computerPoints = 0;
    let winner;

    for (let i = 0; i < 5; i++){

        let playerSelection = cleanPlayerSelection(prompt("Choose between Rock, Paper and Scissor"));
        let computerSelection = getComputerChoice();

        if (playerSelection != 'Rock' && playerSelection != 'Paper' && playerSelection != 'Scissor') {
            console.log('invalid selection, input again');
            i--;
        } else {
            
            console.log('Match Number ' + (i + 1) );
            console.log('You choose:' + playerSelection);
            console.log('Computer choose:' + computerSelection);

            winner = playRound(playerSelection, computerSelection);

            if (winner == 1) {
                computerPoints++;
            } else if (winner == 2 ) {
                playerPoints++;
            }
            
            console.log('Player points:' + playerPoints + ' / Computer points:' + computerPoints);            
        }
    }

    if (computerPoints > playerPoints) {
        console.log('With ' + computerPoints + ' points, Computer won the game!');
    } else if (playerPoints > computerPoints ) {
        console.log('With ' + playerPoints + ' points, You won the game!');
    } else {
        console.log('It is a draw! Both have ' + playerPoints + ' points.');
    }

}

game();