let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");
const gencompchoice=()=>{
    const option=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green"
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red"
    }
}
const draw=()=>{
    msg.innerText="Game draw.Play Again";
    msg.style.backgroundColor="#081b31"
}
const playgame=(userchoice)=>{
    console.log("userchoice= ",userchoice);
    const compchoice=gencompchoice();
    console.log("compchoice =",compchoice );
    if(userchoice===compchoice){
        draw();
    }else{
        let userwin=true;
    if(userchoice==="rock"){
        userwin=compchoice==="paper" ? false:true;
    }else if(userchoice==="paper"){
        userwin=compchoice==="scissor" ? false:true;
    }else{
        userwin=compchoice==="rock" ? false:true;
    }
    showwinner(userwin,userchoice,compchoice);
}


}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("Id");
        playgame(userchoice);
    })
})