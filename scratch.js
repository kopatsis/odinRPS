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





function game(){
    let ratios = [0,0,0]
    for (let i = 0; i < 5; i++){
        let userSelect = prompt(`Enter rock, paper, or scissors (Round ${i+1})`);
        let result = playRound(userSelect)
        console.log(result);
        switch(result[0]){
            case 'T':
                ratios[0]++;
                break;
            case 'L':
                ratios[1]++;
                break;
            case 'W':
                ratios[2]++;
                break;
        }
        if (i < 4){
            console.log(`So far: ${ratios[2]} wins, ${ratios[1]} losses, ${ratios[0]} ties`);
        }
    }
    let wlratio = ratios[1]/ratios[2];
    let wlresult = "Tie";
    if (wlratio > 1){
        wlresult = "Loss";
    }
    else if (wlratio < 1){
        wlresult = "Win"
    }
    console.log(`End result: ${wlresult}, with ${ratios[2]} wins, ${ratios[1]} losses, ${ratios[0]} ties`);
}