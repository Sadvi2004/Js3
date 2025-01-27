let mainEle = document.createElement("div");
mainEle.setAttribute("class", "mainBlock");
document.body.appendChild(mainEle);
mainEle.innerText = "main";
console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class", "topBlock");
mainEle.appendChild(topEle);

let imgEle = document.createElement("img");
imgEle.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
imgEle.width = 300;
imgEle.height = 300;
topEle.appendChild(imgEle);

let bottomEle = document.createElement("div");
bottomEle.setAttribute("class", "bottomBlock");
mainEle.appendChild(bottomEle);

let h1 = document.createElement("h1");
h1.innerText = "Hello World";
h1.setAttribute("class", "heading");
let button = document.createElement("button");
button.innerText = "Click Me";
button.setAttribute("class", "btn");
bottomEle.appendChild(button);
bottomEle.appendChild(h1);