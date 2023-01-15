let Books=[];

function Book(name,author,pages,read){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

let addBook=document.getElementById("add");
let bookArea=document.querySelector(".allbooks");

addBook.addEventListener("click",()=>{
    addBookinApp();
});

function addBookinApp()
{
    let form=document.getElementById("form");
    form.style.marginTop="0%";
    form.style.zIndex=1;
    let btn=document.getElementById("btn");
    // let overlay=document.getElementById("overlay");
    // overlay.classList.add("active");
    btn.addEventListener("click",()=>{
        addBooktoArea();
        // overlay.classList.remove("active");
        form.style.marginTop="-250%";
    });
}

function addBooktoArea()
{
    let title=document.getElementById("title");
    let author=document.getElementById("author");
    let pages=document.getElementById("pages");
    let read=document.getElementById("read");

    
    let card=createBook(title.value,author.value,pages.value,read.checked);

    // title.value="";
    // author.value="";
    // pages.value="";
    // read.checked=false;

    let newBook=new Book(title.value,author.value,pages.value,read.checked)

    Books.push(newBook);
    bookArea.appendChild(card);
}

function createBook(title,author,pages,read)
{
    let cardDiv=document.createElement("div")

    let titlediv=document.createElement("label")
    titlediv.textContent="Title: "+title;

    let authordiv=document.createElement("label")
    authordiv.textContent="Author: "+author;

    let pagesdiv=document.createElement("label")
    pagesdiv.textContent="Pages: "+pages;

    if(read)
    {
        cardDiv.style.backgroundColor="green";
    }
    else
    {
        cardDiv.style.backgroundColor="red";
    }
    
    cardDiv.appendChild(titlediv);
    cardDiv.appendChild(authordiv);
    cardDiv.appendChild(pagesdiv);

    cardDiv.setAttribute("class","book");
    return cardDiv;
}

