let element = document.getElementById('demo');
element.innerText = 'DOM Tutorials';
console.log(element);

let demo1 = document.getElementById('test');
demo1.innerHTML = '<h1>header</h1>';
console.log(demo1);

let ele = document.getElementsByClassName('test1');
console.log(ele);
// ele[0].style.backgroundColor = 'red';
//...............Spread operator.................
// it is used to take every value from the original array and store it in the new array (pure array).
//syntax : [...variable]
let x = [...ele]
console.log(x, Array.isArray(x));
x.map((val) => {
    val.style.backgroundColor = 'yellow';
})

let eles = document.getElementsByName('name');
console.log(eles)

//...............QuerySelector.................

let ele1 = document.querySelector('#demo');
console.log(ele1);

let ele2 = document.querySelector('.test1');
console.log(ele2);

let ele3 = document.querySelectorAll('#test1');
// console.log([...ele3]);

[...ele3].map((eles) => {
    console.log(eles.innerText);
})