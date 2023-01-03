//const prompt=require("prompt-sync")({sigint:true}); 
let weapons=["Rock","Paper","Scissor"];

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
        const uc=document.querySelectorAll(".choice .user-choice");
        const cc=document.querySelectorAll(".choice .comp-choice");
        if(roundWinner(compChoice,userChoice)==-1)
        {
            compNum++;
            cc[0].textContent("Computer:"+compNum);
            console.log("comp won!");
        }
        else if(roundWinner(compChoice,userChoice)==1)
        {
            userNum++;
            uc[0].textContent("User:"+userNum);
            console.log("user won!");
        }
        else
        {
            console.log("tie!");
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
            winner.textContent("Winner:User");
        }
        else
        {
            winner.textContent("Winner:Computer");
        }
    }
}

let userNum=0,compNum=0,flag=0;
const winner=document.querySelector('.winner');

while(userNum<5 && compNum<5)
{
    let userChoice;
    const r=document.querySelectorAll(".items .Rock");
    const s=document.querySelectorAll(".items .Scissor");
    const p=document.querySelectorAll(".items .Paper");
    r[0].addEventListener("click",()=>{
        userChoice="Rock";
        return "Rock";
    });
    s[0].addEventListener("click",()=>{
        userChoice="Scissor";
        return "Scissor";
    });
    p[0].addEventListener("click",()=>{
        userChoice="Paper";
        return "Paper";
    });
    let compChoice=opponent();
    makeWinner(compChoice,userChoice);
}
