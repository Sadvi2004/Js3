localStorage.setItem('user1', 'sadvi');
localStorage.setItem('user2', 'vishnu');

console.log(localStorage.getItem('user1'));


let user = localStorage.getItem('user2');
console.log(user);

localStorage.clear();


sessionStorage.setItem('user3', 'sai');
sessionStorage.setItem('user5', 'hello');
console.log(sessionStorage.getItem('user3'));

let user2 = sessionStorage.getItem('user5');
console.log(user2);
sessionStorage.removeItem('user5');