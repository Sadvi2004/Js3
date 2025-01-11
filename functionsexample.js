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

//higher order functions

function hof(a){
    return a();
}
let c=hof(function(){return "this is call back function"});
console.log(c);


function add(callback){
    return callback(5,3);
}
let as=add(function(a,b){return a+b});
console.log(as);

let users=['sadvi','vishnu','shan','sai','yashwanth'];
for(let i=0;i<users.length;i++){
    console.log(users[i]);
}
let result=users.map((user)=>{
    return (user)
});
console.log(result);

users.forEach((user)=>{
    console.log(user);
})
// let a=10;
// var b=20;
// function hello(){
//     var userr="sadvi";
//     let company = "Google";
//     const sal=7670988077;
//     console.log(userr);
//     console.log(company);
//     console.log(sal);
//     console.log(a,b);console.log("Starting execution of the code");

// function x(){
//     let a=10;
//     const b=20;
//     console.log(a,b);
//     function y(){
//         let p="Js";
//         const q="Javascript";
//         console.log(p,q);
//         function z(){
//             const username="sadvi";
//             console.log(username);
//             console.log(a);
//             console.log(q);
//         }
//     }
// }