let username = document.getElementById('name');
let Password = document.getElementById('password');
let form = document.querySelector('form');
let gen = document.getElementsByName("gender");

form.addEventListener('submit', event => {
    event.preventDefault();
    let user = username.value;
    let pass = Password.value;
    let gens = "";
    for (let i = 0; i < gen.length; i++) {
        if (gen[i].checked == true) {
            // console.log(gen[i].value);
            gens = gen[i].value;
        }
    }
    let userdetails = {
        user, pass, gens
    }
    console.log(userdetails);
})