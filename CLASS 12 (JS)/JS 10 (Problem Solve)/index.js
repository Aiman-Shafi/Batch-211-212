const users = [
  { name: "Aziz", id: 1, age: 25 },
  { name: "Hamim", id: 2, age: 26 },
  { name: "Iqbal", id: 3, age: 27 },
  { name: "Redoy", id: 4, age: 28 },
  { name: "SHSH", id: 5, age: 29 },
  { name: "Hakim", id: 6, age: 30 },
];

// console.log(persons[3]);

for (i = 0; i < users.length; i++) {
  console.log(users[i]);
}

const userList = document.getElementById("user-list");

users.forEach((user) => {
  userList.innerHTML += `<li>${user.name} age: ${user.age} id: ${user.id}</li>`;
});
