let drawingArea=document.querySelector(".main .drawing-area");
let size=document.querySelector(".main .properties .grid-size-elems .grid-size");

drawingArea.style.height="575px";
drawingArea.style.width="575px";

let slider = document.getElementById("myRange");
slider.addEventListener("click",()=>{
    console.log(value);
    setup();
});

let value=size.textContent;
if(value=="")
{
    value="16";
}

value=Number(value);
setup();

function setup()
{
    drawingArea.innerHTML=``;
    size.textContent=slider.value;
    value=slider.value;
    for(let i=0;i<value;i++)
    {
        for(let j=0;j<value;j++)
        {
            let block=document.createElement("div");
            let w=Math.ceil(575/value);
            block.style.width=w+"px";
            block.style.height=w+"px";
            block.style.backgroundColor="white";
            block.setAttribute("class","block");
            drawingArea.appendChild(block);
        }
    }
    let colorElement=document.querySelector(".main .properties .pen-type .color .color-code");
    let color=colorElement.textContent;
    let colorBlock=document.querySelector(".main .properties .pen-type .color .color-block");
    colorBlock.style.backgroundColor=color;
    colorBlock.addEventListener("click",()=>color=colorElement.textContent);
    colorElement.addEventListener("click",()=>{
        colorElement.textContent=prompt("Enter hex code with '#");
        color=colorElement.textContent;
        colorBlock.style.backgroundColor=colorElement.textContent;
    });

    let blocks=document.querySelectorAll(".main .drawing-area .block");
    blocks.forEach(block=>{
        block.addEventListener("mouseover",()=>{
            block.style.backgroundColor=color;
        });
    });

    let clear=document.querySelector(".main .properties .pen-type .clear");
    clear.addEventListener("click",()=>{
        blocks.forEach(block=>{
            block.style.backgroundColor="white";
            color=colorElement.textContent;
        })
    });

    let eraser=document.querySelector(".main .properties .pen-type .eraser");
    eraser.addEventListener("click",()=> color="white");
}






