let users = ['sadvi', 'vishnu', 'shan', 'sai', 'yashwanth']
console.log(users);

for (var i = 0; i < users.length; i++) {
    console.log(users[i]);
}
//.......................Map...............

let result = users.map((user) => {
    return user;
});

console.log(result);

//.......................forEach...............

users.forEach((user) => {
    console.log(user);
});

//.......................push...............

users.push('rahul');
console.log(users);

//.......................pop...............

users.pop();
console.log(users);

//.......................unshift...............

users.unshift('ankit');
console.log(users);

//.......................shift...............

users.shift();
console.log(users);

//.......................slice...............

let sliceUsers = users.slice(1, 3);
console.log(sliceUsers);

//.......................filter...............

let filterUsers = users.filter((user) => {
    return user.length > 4;
});
console.log(filterUsers);

//.......................splice...............

users.splice(2, 0, 'kiran', 'prakash');
console.log(users);

//.......................sort...............

users.sort();
console.log(users);

//.......................reverse...............

users.reverse();
console.log(users);

//.......................join...............

let joinUsers = users.join(', ');
console.log(joinUsers);

//.......................find...............

let findUser = users.find((user) => {
    return user.startsWith('s');
});
console.log(findUser);
