let userdetails = {
    name: 'sadvi',
    age: 20,
    city: 'hyderabad',
    country: 'India',
    qualification: 'B.Tech',
    profession: 'Developer',
    hobbies: ['reading', 'writing', 'singing'],
    address: {
        street: 'xyz',
        area: 'abc',
        pincode: 500001
    },
}
console.log(userdetails);
console.log(userdetails.address.street, userdetails.address.pincode,);

// function getUserDetails() {
//     window.fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res) => res.json())
//         .then(data => {
//             console.log(data);
//         }).catch((error) => {
//             console.log(error);
//         });
// }