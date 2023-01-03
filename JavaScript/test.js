function add7(a)
{
    return a+7;
}

function multiply(a,b)
{
    return a*b;
}

function capitalize(a)
{
    let temp=a.toUpperCase();
    let temp2=a.toLowerCase();

    let ans;
    ans=temp[0];
    for(let i=1;i<a.length;i++)
    {
        ans+=temp2[i];
    }
    return ans;
}

function lastletter(a)
{
    return a[a.length-1];
}

let check=5;
console.log(add7(check));

let a=5,b=10;
console.log(multiply(a,b));

let text="hI i am AbhiJaY";
console.log(capitalize(text));

let flag="sdkjfhkehf";
console.log(lastletter(flag));
