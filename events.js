let bt = document.getElementById("btn");

bt.addEventListener("click", () => {
    console.log("button clicked");
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "white";
    }, 2000)
})