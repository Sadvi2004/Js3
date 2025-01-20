let userdetails = {
    "name": "Raj",
    "age": 25,
    "city": "Chennai"
}
console.log(userdetails);
let x = JSON.stringify(userdetails);
console.log(x);
console.log(typeof (x));

let y = JSON.parse(x);
console.log(y);
console.log(typeof (y));
