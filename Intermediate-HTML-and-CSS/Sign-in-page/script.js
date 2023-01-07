let heading=document.querySelector(".main-area .form .heading-container .heading");

heading.addEventListener("mouseover",()=>{
    heading.innerHTML="-“The nail that sticks out is struck.”";
});

heading.addEventListener("mouseout",()=>{
    heading.innerHTML="出る杭は打たれる";
})