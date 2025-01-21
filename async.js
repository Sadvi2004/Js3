console.log(10);
console.log(20);
setTimeout(() => {
    console.log(30);
}, 1000);
console.log(40);
console.log(50);

// -----------------------------Setinterval-----------------
// setInterval(() => {
//     document.writeln("MRUH");
// }, 1000)

// -----------------------------promise-----------------
let promise2 = new Promise((resolve, reject) => { });
console.log(promise2);

let promise = new Promise((resolve, reject) => {
    resolve("success");
})
promise.then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("finally");
})

let promise1 = new Promise((resolve, reject) => {
    reject("failure");
})
p3.then((response) => { console.log(response) }).catch((err) => console.log(err));