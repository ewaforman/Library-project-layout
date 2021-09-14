import "../scss/main.scss";

// get all students
fetch("http://127.0.0.1:5000/get_all_students")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, surname, username, id } = repo;
      const repositryList = document.querySelector(".list--js");

      const myTemplate = `<li> <p class="project__grid project__grid-hover">
      <span> ${id} </span>
       <span> ${name} </span>
       <span> ${surname} </span>
       <span> ${username} </span>
     </p> </li>`;
      repositryList.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log("nie udalo sie pobrac");
  });

  // get all books
  fetch("http://127.0.0.1:5000/get_all_books")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, surname, title, status, id } = repo;
      const repositryList = document.querySelector(".books__all-js");

      const myTemplate = `<td>${id}</td> <td>${name}</td> <td>${surname}</td> <td>${title}</td> <td>${status}</td>`;
      repositryList.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log("nie udalo sie pobrac");
  });

// get number of students
fetch("http://127.0.0.1:5000/count_all_students")
.then((resp) => resp.json())
.then((resp) => {
    const { number} = resp;
    console.log(number)
    const repositryList = document.querySelector(".studentButtons__number-all");

    const myTemplate = `${number}`;
    repositryList.innerHTML += myTemplate;
})
.catch((error) => {
  console.log("nie udalo sie pobrac liczby studentów");
});














// // fetch("http://localhost:5000/add_student")
// //   .then((res) => res.json())
// //   .then((res) => {
// //     const conteiner = document.querySelector(".test");
// //     // const { name, surname, username, id } = res
// //     // for (let repo of res) {
// //     //   console.log(repo);
// //     //   const { name, surname, username, id } = repo;

// //       const template = `Dodałeś studenta. Name`;
// //       console.log(res)

// //         conteiner.innerHTML += template;
// //     // }
// //   })
// //   .catch((e) => console.log(e));

// // const button = document.querySelector(".button");
// // function f () {
// //     const abc = fetch('http://localhost:5000/add_student')
// //     return abc
// // // return fetch('http://localhost:5000/add_student')
// // // .then((res) => res.text())
// // //   .then((res) => {
// // //     const conteiner = document.querySelector(".test");
// // //     const template = `Dodałeś studenta. ${res}`;
// // //     console.log(res)
// //     // conteiner.innerHTML = res;
// //   })}

// //   button.addEventListener("click", f);

// // function fetchBooks() {
// // return fetch("http://localhost:5000/add_student")
// //   .then(response => response.text())
// // .then(html => {
// //   console.log(html);
// //   document.getElementById('testy').innerHTML = html;
// // })}

// // document.addEventListener('DOMContentLoaded', function() {
// //     fetchBooks()
// //   })

// // function asdf() {

// // fetch('http://localhost:5000/add_student')
// //             .then(function (response) {
// //                 return response.text();
// //             })
// //             .then(function (data) {
// //                 appendData(data);
// //             })
// //             .catch(function (err) {
// //                 console.log('error: ' + err);
// //             });
// //         function appendData(data) {
// //             const mainContainer = document.getElementById("testy");

// //                 const div = document.createElement("div");
// //                 div.innerHTML = 'napis';
// //                 mainContainer.appendChild(div);

// //         }

// // }

// // const button = document.querySelector(".button");

// // function createContent(querySelectorContent, content) {
// //   const element = document.querySelector(querySelectorContent);
// //   element.innerHTML = content;
// // }

// //   document.addEventListener("click", createContent(".test", "To ja!"));
// //   createContent(".test", "To ja!");
// //

// // fetch("http://localhost:8080/")
// //   .then((res) => res.text())
// //   .then((res) => {
// //     const conteiner = document.querySelector(".test");
// //       const template = `Dodałeś studenta. Name`;
// //     //   console.log(res)

// //     conteiner.innerHTML = template;
// //   })

// //   const button = document.querySelector(".button");
// //   console.log(button)

// // function ff() {
// // //   fetch("http://localhost:5000/add_student")
// // //   .then((res) => res.text())
// // //   .then((res) => {
// // //       console.log(res)
// //       const conteiner = document.querySelector(".test");
// //       const template = "dupa";
// //     //   console.log(res)

// //     conteiner.innerHTML = template;

// //   }
// //   button.addEventListener("click", ff);

// //   https://stackoverflow.com/questions/50378564/dont-redirect-on-submitting-form/50378615

// const button = document.querySelector(".guzik");

// function send(e, form) {
//   fetch(form.action, { method: "post" });
//   const response = fetch(form.action, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     // mode: 'cors', // no-cors, *cors, same-origin
//     // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     // credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       // "Content-Type": "application/json",
//       "Content-Type": "multipart/form-data",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     // body: JSON.stringify({"name": "Ewa1113", "surname": "Ewa2321","username": "Ewa3111" }) // body data type must match "Content-Type" header
//     body: new FormData(form),
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       const asdf = res;
//       console.log(asdf);
//     });

//   console.log("We send post asynchronously (AJAX)");
//   e.preventDefault();
// }

// function postData() {
//   // const form = new FormData(document.getElementById("form"));
//   // fetch('/login', {
//   //   method: 'POST',
//   //   body: form

//   const data = new URLSearchParams();
//   for (const pair of new FormData(document.getElementById("form"))) {
//     data.append(pair[0], pair[1]);
//   }

//   // Default options are marked with *
//   const response = fetch("http://localhost:5000/add_student", {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     // mode: 'cors', // no-cors, *cors, same-origin
//     // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     // credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       "Content-Type": "multipart/form-data",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     // body: JSON.stringify({"name": "Ewa1113", "surname": "Ewa2321","username": "Ewa3111" }) // body data type must match "Content-Type" header
//     body: data,
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       const asdf = res;
//       console.log(asdf);
//     });
// }

// button.addEventListener("click", postData);



