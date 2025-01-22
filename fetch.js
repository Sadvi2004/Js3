// -----------------------------Api Fetching-----------------

function fetchuser() {
    let datax = fetch('https://jsonplaceholder.typicode.com/users');
    datax.then((res) => {
        return res.json().then((data) => {
            // console.log(data);
            let Store = document.getElementById('store');
            data.map((item) => {
                Store.innerHTML += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.email}</td>
                        <td>${item.company.name}</td>
                    </tr>`;
            })
        })
    })
        .catch((err) => {
            console.log(err);
        })
}
fetchuser();
