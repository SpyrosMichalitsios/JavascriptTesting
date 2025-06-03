
let humanScore=0;
let computerScore=0;

function getComputerChoise(){
    //Initialize the choise variable
   let choise=Math.random();
    //It returns rock,paper or scissors depending on the value assigned by random.math
   if(choise<0.33)
    return "Rock";
   else if(choise<0.66)
    return "Scissors";
   else 
    return "Paper";
}


function getHumanChoise(){
    let answer=prompt("Sooo...Rock..Paper..or Scissors?");
    return answer;
}




function playRound(computerChoise,humanChoise){

    switch(computerChoise.toLowerCase()){
        case "rock":
            switch(humanChoise.toLowerCase()){
                case "rock":
                    return alert("Its a tie!");
                case "paper":{
                    humanScore++;
                    return alert("You won this round!");
                }
                case "scissors":{
                    computerScore++;
                    return alert("Better luck next time!");
                }
            }
        case "paper":    
            switch(humanChoise.toLowerCase()){
                case "paper":
                    return alert("Its a tie!");
                case "scissors":{
                    humanScore++;
                    return alert("You won this round!");
                }
                case "rock":{
                    computerScore++;
                    return alert("Better luck next time!");
                }
            }
        case "scissors":
            switch(humanChoise.toLowerCase()){
                case "scissors":
                    return alert("Its a tie!");
                case "rock":{
                    humanScore++;
                    return alert("You won this round!");
                }
                case "paper":
                    computerScore++;
                    return alert("Better luck next time!");
            }
    }        
}




function playGame(){
    do{
        let computerSelection=getComputerChoise();
        let humanSelection=getHumanChoise();

        playRound(computerSelection,humanSelection);

    }while(humanScore<5 && computerScore<5)
    
    if(humanScore===5)
        return alert("OMG!!! <3 Congrats Bubuuuu!!!");
    else
        return alert("You only win when you play with Dudu -.-");
}