
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => showUsersDetails(data))

function showUsersDetails(data){
let lists = "";
data.forEach(user => {
    lists = lists + `
    <div>
    <h1>User Name : ${user.username}</h1>
    <h2>Name : ${user.name}</h2>
    <h3>User's Email : ${user.email}</h3>
    <p>Street: ${user.address.street}</p>
    <p>City: ${user.address.city}</p>
    <p>Zip Code : ${user.address.zipcode}</p>
    </div>
    `
});
const div =document.getElementById("user-container");
div.innerHTML = lists;
}


