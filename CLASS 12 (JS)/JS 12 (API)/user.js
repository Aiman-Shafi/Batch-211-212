// https://randomuser.me/api/?results=50

let url = "https://randomuser.me/api/?results=30";

function fetchUser(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => showUsers(data));
}

fetchUser(url);

function showUsers(users) {
  console.log(users.results);
  let allUsers = users.results;
  allUsers.forEach(
    (user) =>
      // console.log(user.name.first + " " + user.name.last)
      (document.getElementById("random-user").innerHTML += `
        <div class="user-box">
            <img src='${user.picture.large}' alt='' />
            <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <p>Phone: ${user.cell}</p>
            <p>Email: ${user.email}</p>
        </div>
    `)
  );
}
