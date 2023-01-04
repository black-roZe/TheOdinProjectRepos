// function add7(a)
// {
//     return a+7;
// }

// function multiply(a,b)
// {
//     return a*b;
// }

// function capitalize(a)
// {
//     let temp=a.toUpperCase();
//     let temp2=a.toLowerCase();

//     let ans;
//     ans=temp[0];
//     for(let i=1;i<a.length;i++)
//     {
//         ans+=temp2[i];
//     }
//     return ans;
// }

// function lastletter(a)
// {
//     return a[a.length-1];
// }

// let check=5;
// console.log(add7(check));

// let a=5,b=10;
// console.log(multiply(a,b));

// let text="hI i am AbhiJaY";
// console.log(capitalize(text));

// let flag="sdkjfhkehf";
// console.log(lastletter(flag));


const container=document.querySelector("#container");

let para=document.createElement("p");
para.textContent="Hey I'm red!";
para.style.color="red";

container.appendChild(para);

let heading=document.createElement("h3");
heading.textContent="I'm a blue H3!";
heading.style.color="blue";

container.appendChild(heading);

let div=document.createElement("div");
div.style.border="4px solid black";
div.style.backgroundColor="pink";

let divH1=document.createElement("h1");
divH1.textContent="I'm in a div";
div.appendChild(divH1);

let divPara=document.createElement("p");
divPara.textContent="ME TOO!";
div.appendChild(divPara);

container.appendChild(div);