let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
    }, 2000);
});

async function demo() {
    console.log('start');
    let x = await (p);
    console.log(x);
    console.log('end');
}
demo();

async function fetchuser() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');//json
    let data = await response.json();//with out await state it was in promise state so we want to convert it from json to js by using parse(then) 
    //with await state we dont need to write another then.
    console.log(data);
}
fetchuser();