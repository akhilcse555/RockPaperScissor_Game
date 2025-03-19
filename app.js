let userscore = 0;
let compscore = 0;
//let count=0;
const choices = document.querySelectorAll(".choice");
const winnermsg = document.querySelector("#msg"); 
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

const genComputerchoice = () => {
    // rock,paper,scissor
    let choice = ["rock","paper","scissor"];
    const randomindex = Math.floor(Math.random() * 3 ); //Math.random() contain random numbers btw 0 and 1;
    
    return choice[randomindex];
};

const drawGame = () => {
    console.log("Game was draw.");
    winnermsg.innerText="Game was draw. Play Again!";
    winnermsg.style.backgroundColor = "green";
};

const showWinner = (userwin,userchoice,compchoice) => {
        if(userwin == true)
        {
            userscore++;
            user_score.innerText = userscore;
            console.log("You Win!");
            winnermsg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
            winnermsg.style.backgroundColor = "green";
        }
        else{
            compscore++;
            comp_score.innerText = compscore;
            console.log("You Lose");
            winnermsg.innerText=`You Lost. ${compchoice} beats your ${userchoice}`;
            winnermsg.style.backgroundColor = "red";

        }
};

const playGame = (userchoice) => {
    console.log(`User choice is ${userchoice}`);
    //Generating computer choice - Modular
    const compchoice = genComputerchoice();
    console.log(`computer choice is ${compchoice}`);
    if(userchoice == compchoice)
    {
        drawGame();
        //console.log("Game was draw.");
    }
    else
    {
        let userWin = true;
        if(userchoice == "rock")
        {
            if(compchoice == "paper")
            {
                userWin = false;
            }
            else
            {
                //computerchoice is scissor
                userWin = true;
            }
        }
        else if(userchoice == "paper")
        {
            userWin = compchoice == "rock" ? true : false ;
        }
        else
        {
            //userchoice is scissor
            userWin = compchoice == "paper" ? true : false ;
        }
        showWinner(userWin,userchoice,compchoice);
    }
    
    //return compchoice;
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
    //    console.log("choice was clicked",userchoice);
        playGame(userchoice);
        //   count++;
    });
});

//console.log(count);