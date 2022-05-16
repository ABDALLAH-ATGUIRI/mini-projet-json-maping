let datajs = document.querySelector("#change");
fetch("http://localhost:3000/user")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      datajs.innerHTML += `<tr class="utilis-conf">
<td>${element.id}</td>
<td>${element.createdDate}</td>
<td><p class="valid ${element.status}">${element.status}</p></td>
<td>${element.firstName}</td>
<td>${element.lastName}</td>
<td>${element.userName}</td>
<td>${element.registrationNumber}</td>
<td>
  <button class="trash" onclick="supreme(${element.id})">
    <svg
      fill="#D53D1C"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="128px"
      height="128px"
    >
      <path
        d="M 49 1 C 47.34 1 46 2.34 46 4 C 46 5.66 47.34 7 49 7 L 79 7 C 80.66 7 82 5.66 82 4 C 82 2.34 80.66 1 79 1 L 49 1 z M 24 15 C 16.83 15 11 20.83 11 28 C 11 35.17 16.83 41 24 41 L 101 41 L 101 104 C 101 113.37 93.37 121 84 121 L 44 121 C 34.63 121 27 113.37 27 104 L 27 52 C 27 50.34 25.66 49 24 49 C 22.34 49 21 50.34 21 52 L 21 104 C 21 116.68 31.32 127 44 127 L 84 127 C 96.68 127 107 116.68 107 104 L 107 40.640625 C 112.72 39.280625 117 34.14 117 28 C 117 20.83 111.17 15 104 15 L 24 15 z M 24 21 L 104 21 C 107.86 21 111 24.14 111 28 C 111 31.86 107.86 35 104 35 L 24 35 C 20.14 35 17 31.86 17 28 C 17 24.14 20.14 21 24 21 z M 50 55 C 48.34 55 47 56.34 47 58 L 47 104 C 47 105.66 48.34 107 50 107 C 51.66 107 53 105.66 53 104 L 53 58 C 53 56.34 51.66 55 50 55 z M 78 55 C 76.34 55 75 56.34 75 58 L 75 104 C 75 105.66 76.34 107 78 107 C 79.66 107 81 105.66 81 104 L 81 58 C 81 56.34 79.66 55 78 55 z"
      />
    </svg>
  </button>
</td>
</tr>`;
    })
  );

async function supreme(id) {
  let el = document.getElementById("sup");
  let SS = document.getElementById("oui");

  if (el.style.display === "block") {
    el.style.display = "none";
  } else {
    el.style.display = "block";
    SS.value = id;
  }
}
function deleteUser() {
  let SS = document.getElementById("oui");
  let data = {
    id: SS.value,
  };
  fetch("http://localhost:3000/user" + "/" + SS.value, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) =>
    res.json().then((json) => {
      console.log(json);
    })
  );

  // data.filter((user) => user.id != SS.value),
  // console.log(user)
  // displayUsers(users)
}
function ajouter() {
  let el = document.getElementById("ajouter");

  if (el.style.display === "block") {
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}

function addUser() {
  let id = Math.floor(Math.random() * 100000);
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let userName = document.getElementById("userName").value;
  let registrationNumber = document.getElementById("registrationNumber").value;
  let status = document.getElementById("etat").value;
  let createdDate = document.getElementById("createdDate").value;
  let data = {
    id,
    firstName,
    lastName,
    userName,
    registrationNumber,
    status,
    createdDate,
  };
  fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("userName").value = "";
      document.getElementById("status").value = "";
      document.getElementById("createdDate").value = "";
      document.getElementById("registrationNumber").value = "";
    }).then(
      
    )
    .catch();
    
  
}

const form = document.querySelector("#ajoutForm");
    form.addEventListener("click", addUser);
    form.onSubmit = addUser;
