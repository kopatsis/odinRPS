const rock = document.getElementById("rock");
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

let wins = 0;
let losses = 0;
let ties = 0;

const winlist = document.getElementById("win");
const losslist = document.getElementById("loss");
const tielist = document.getElementById("tie");

const recordlist = document.getElementById("record");

const message = document.querySelector('#message');
let result = document.createElement('div');
result.classList.add("to_user")
message.appendChild(result);

const reset = document.querySelector('#reset');
reset.addEventListener("click", reset_all)

rock.addEventListener("click", output_rock);
paper.addEventListener("click", output_paper);
scissors.addEventListener("click", output_scissors);

rock.addEventListener("transitionend", remove_clicked_rock);
paper.addEventListener("transitionend", remove_clicked_paper);
scissors.addEventListener("transitionend", remove_clicked_scissors);

function remove_clicked_rock(){
    rock.classList.remove('clicked');
}

function remove_clicked_paper(){
    paper.classList.remove('clicked');
}

function remove_clicked_scissors(){
    scissors.classList.remove('clicked');
}

function reset_all(){
    wins = 0
    losses = 0
    ties = 0
    winlist.textContent = `${wins} wins`
    losslist.textContent = `${losses} losses`
    tielist.textContent = `${ties} ties`
    update_ratio()
    result.textContent = " ";
}

function output_rock(){
    let round = playRound("rock");
    result.textContent = round;
    update_record(round);
    rock.classList.add('clicked');
}

function output_paper(){
    let round = playRound("paper");
    result.textContent = round;
    update_record(round);
    paper.classList.add('clicked');
}
function output_scissors(){
    let round = playRound("scissors");
    result.textContent = round;
    update_record(round);
    scissors.classList.add('clicked');
}

function update_record(e){
    switch(e.charAt(0)){
        case 'W':
            wins++;
            winlist.textContent = `${wins} wins`
            break;
        case 'L':
            losses++;
            losslist.textContent = `${losses} losses`
            break;
        case 'T':
            ties++;
            tielist.textContent = `${ties} ties`
            break;
    }
    update_ratio();
}

function update_ratio(){
    if (wins > losses){
        recordlist.textContent = "You are winning";
    } else if (losses > wins){
        recordlist.textContent = "You are losing";
    } else{
        recordlist.textContent = "You are tied";
    }  
}




function playRound(userSelection, computerSelection = getComputerChoice()){
    if (userSelection == "rock"){
        if (computerSelection == "rock"){
            return "Tie. Rock ties with rock.";
        }
        else if (computerSelection == "paper"){
            return "Lose. Paper beats rock.";
        }
        else {
            return "Win. Rock beats scissors.";
        }
    }
    else if (userSelection == "paper"){
        if (computerSelection == "rock"){
            return "Win. Paper beats rock.";
        }
        else if (computerSelection == "paper"){
            return "Tie. Paper ties with paper.";
        }
        else {
            return "Lose. Scissors beats paper.";
        }
    }
    else if (userSelection == "scissors"){
        if (computerSelection == "rock"){
            return "Lose. Rock beats scissors.";
        }
        else if (computerSelection == "paper"){
            return "Win. Scissors beats paper.";
        }
        else {
            return "Tie. Scissors ties with scissors.";
        }
    } else{
        return "Your input was not recognized, please choose either Rock, Paper, or Scissors.";
    }
}


function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch (choice){
        case 0:
            return "rock";
            break;
        case 1: 
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}