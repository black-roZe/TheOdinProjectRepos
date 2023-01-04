
//const prompt=require("prompt-sync")({sigint:true}); 
let weapons=["Rock","Paper","Scissor"];

let userT=document.querySelector(".choice .user-choice");
let compT=document.querySelector(".choice .comp-choice");

let compChoice,userChoice;

let userRock=document.querySelector(".items .Rock");
userRock.addEventListener("click",()=>{
    userChoice="Rock";
    compChoice=opponent();
    makeWinner(compChoice,userChoice);
    return;
});
let userPaper=document.querySelector(".items .Paper");
userPaper.addEventListener("click",()=>{
    userChoice="Paper";
    compChoice=opponent();
    makeWinner(compChoice,userChoice);
    return;
});
let userScissor=document.querySelector(".items .Scissor");
userScissor.addEventListener("click",()=>{
    userChoice="Scissor";
    compChoice=opponent();
    makeWinner(compChoice,userChoice);
    return;
});

let userNum=0,compNum=0,flag=0;
const winner=document.querySelector('.winner');

function opponent()
{
    let compChoice=weapons[Math.floor(Math.random()*3)];
    return compChoice;
}

function roundWinner(compChoice,userChoice)
{
    
    if(compChoice=="Rock")
    {
        if(userChoice=="Paper")
        {
            return 1;
        }
        else if(userChoice=="Scissor")
        {
            return -1;
        }
        else
        {
            return 0;
        }
    }
    if(compChoice=="Paper")
    {
        if(userChoice=="Paper")
        {
            return 0;
        }
        else if(userChoice=="Scissor")
        {
            return 1;
        }
        else
        {
            return -1;
        }
    }
    if(compChoice=="Scissor")
    {
        if(userChoice=="Paper")
        {
            return -1;
        }
        else if(userChoice=="Scissor")
        {
            return 0;
        }
        else
        {
            return 1;
        }
    }
}

function makeWinner(compChoice,userChoice)
{
    if(flag==0)
    {
        if(roundWinner(compChoice,userChoice)==-1)
        {
            compNum++;
            compT.textContent="Computer:"+compNum;
        }
        else if(roundWinner(compChoice,userChoice)==1)
        {
            userNum++;
            userT.textContent="User:"+userNum;
        }
    }
    if(compNum==5 || userNum==5)
    {
        flag=1;
        declareWinner();
    }
}

function declareWinner()
{
    if(flag==1)
    {
        if(userNum==5)
        {
            winner.textContent="Winner:User";
        }
        else
        {
            winner.textContent="Winner:Computer";
        }
        let restart=document.createElement("btn");
        restart.setAttribute("class","Rock");
        restart.textContent="Restart";
        restart.addEventListener("click",()=>{
            location.reload();
        });
        let body=document.querySelector("body");
        body.appendChild(restart);
        flag=2;
    }
}



