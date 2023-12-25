// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// TODO: JSON Placeholder Post & User

// let url = "https://jsonplaceholder.typicode.com/users";
// let newUrl = "https://jsonplaceholder.typicode.com/posts";

// function fetchApi(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => displayData(data));
// }

// // fetchApi(url);
// fetchApi(newUrl);

// function displayData(data) {
//   console.log("Show Data:", data);
//   // console.log(typeof users);
//   // console.log(users[0].name);
//   // console.log(users[1].name);
//   // console.log(users[2].name);
//   // console.log(users[3].name);
//   data.forEach(
//     (post) =>
//       (document.getElementById("users").innerHTML += `<li>${post.title}</li>`)
//   );
// }

// TODO: Random Quote Api

function fetchQuote() {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data.quote));
}

function displayQuote(quote) {
  console.log(quote);
  let quoteDiv = document.getElementById("quote");
  quoteDiv.innerHTML = quote;
}

document.getElementById("generate").addEventListener("click", fetchQuote);
fetchQuote();
