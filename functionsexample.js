//without parameters and arguments and parameters
function demo(){
    console.log("hello i am func demo");
}
demo();

//with parameters and arguments
function add1(a,b){
    console.log(a+b);
}
add1(5,10);

//palindrome....
function ispalindrome(str){
    let revstr='';
    for(let i=str.length-1;i>=0;i--){
        revstr+=str[i];
    }
    if(str==revstr){
        console.log("palindrome")
    }
    else{
        console.log("not palindrome")
    }
}
ispalindrome("madam");

//anonymus function....
// function(){
//     console.log("anonymus function");
// }
// it cann't be called because func doesnot contain any name so it cann't be executed.(doesn't hava any name)

//function expression....
let x=function(){
    console.log("function expression");
}
x();

// IIFE...
(
    function(){
        console.log("IIFE");
    }
)();

//arrow function
//()=>{} syntax...
// let y=()=>{console.log("hello")};
// y();
let y=a=>console.log(a);
y(10);

let z=_=>console.log("first");
z();

//return it is an end of an statement
//explicit return only for normal functions
function add2(a,b){
    return a+b;
}
console.log(add2(5,10));

let xz=(a,b)=>a+b;
console.log(xz(10,20));

let xa=(a,b)=>{return a+b};
console.log(xa(20,40))