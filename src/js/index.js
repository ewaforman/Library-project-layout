import "../scss/main.scss";

// get all students
fetch("http://127.0.0.1:5000/get_all_students")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, surname, username, id } = repo;
      const repositryList = document.querySelector(".student__body");

      const myTemplate = `<tr>
      <td class="col__id">${id}</td>
      <td>${name}</td>
      <td>${surname}</td>
      <td class="col__user">${username}</td>`;
      repositryList.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log("Nie udalo sie pobrac studentow.");
  });

// get all books
fetch("http://127.0.0.1:5000/get_all_books")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, surname, title, status, id } = repo;
      const repositryList = document.querySelector(".book__body");

      const myTemplate = `<tr>
      <td class="col__id">${id}</td>
      <td class="col__authorName">${name}</td>
      <td class="col__authorSurname">${surname}</td>
      <td>${title}</td>`;
      repositryList.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log("Nie udalo sie pobrac ksiazek.");
  });

// get number of students
fetch("http://127.0.0.1:5000/count_all_students")
  .then((resp) => resp.json())
  .then((resp) => {
    const { number } = resp;
    const repositryList = document.querySelector(".student__number");

    const myTemplate = `(${number})`;
    repositryList.innerHTML = myTemplate;
  })
  .catch((error) => {
    console.log("Nie udalo sie pobrac liczby studentow.");
  });

// get all hires
fetch("http://127.0.0.1:5000/get_all_hires")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const {
        id_book,
        id_student,
        date_hire,
        date_return,
        id,
        student_name,
        student_surname,
        author_name,
        author_surname,
        title,
      } = repo;
      const repositryList = document.querySelector(".hire__body");

      const myTemplate = `<tr>
    <td class="col__id">${id_book}</td>
    <td class="col__id">${id_student}</td>
    <td>${date_hire}</td>
    <td>${date_return}</td>
  </tr>`;
      repositryList.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log("Nie udalo sie pobrac wypozyczen.");
  });

// get number of books
fetch("http://127.0.0.1:5000/count_all_books")
  .then((resp) => resp.json())
  .then((resp) => {
    const { number } = resp;
    const repositryList = document.querySelector(".books__number");

    const myTemplate = `(${number})`;
    repositryList.innerHTML = myTemplate;
  })
  .catch((error) => {
    console.log("Nie udalo sie pobrac liczby ksiazek.");
  });
