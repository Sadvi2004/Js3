let bt = document.getElementById("btn");

bt.addEventListener("click", () => {
    console.log("button clicked");
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "white";
    }, 2000)
})

let ele = document.querySelectorAll(".container");
[...ele].map((elee) => {
    elee.addEventListener("mouseover", () => {
        elee.style.backgroundColor = elee.innerText;
    });
    elee.addEventListener("mouseleave", () => {
        elee.style.backgroundColor = "transparent";
    });
});