for(let i = 1; i<=5;i++){
    console.log("HelloWorld!");
}

let n=100;
for(let i = 1; i<=n;i++){
    if(i%2==0){
        console.log(i +"is a even number");
    }else{
        console.log(i +"is an odd number");
    }
}


//factorial
let fact=1;
for (let i = 1; i <=5;i++){
    fact *= i;
    console.log(fact);
};
console.log(fact);

//print Hello 5 times using while loop
let i=0;
while(i<5){
    console.log("Hello");
    i++;
}
i=0;

//print Hello World 5 times using do-while loop
do{
    console.log("Hello World!");
    i++;
} while(i<=5);