function Book(author)
{
    this.author=author;
    this.info=()=>{
        console.log("HEllo there");
    };   
}

Book.prototype.showMeMore=()=>{console.log("wassup");}

function fruit(name)
{
    this.name=name;
    this.yo=function(){
        console.log("yoooooooo");
    }
}

fruit.prototype=new Book();

let banan=new Book("banana")
console.log(banan.name);

banan.yo();

banan.showMeMore();

banan.info();
banan.author="Lum"
console.log(banan.author)