let heading=document.querySelector(".main-area .form .heading-container .heading");

heading.addEventListener("mouseover",()=>{
    heading.innerHTML="-“The nail that sticks out is struck.”";
});

heading.addEventListener("mouseout",()=>{
    heading.innerHTML="出 る 杭 は 打 た れ る";
})