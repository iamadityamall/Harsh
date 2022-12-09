const loginButton = document.getElementById("loginButton");
const username = document.getElementById("username");
const password = document.getElementById("password");
const inputAll = document.querySelectorAll("input");

loginButton.addEventListener("click", function (e) {
  alert("hello");

  if (username.value === "admin" && password.value === "admin") {
    location.href = "./HomePage.html";
  } else if (!username.value && !password.value) {
    e.preventDefault();
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const parent = username.parentNode;
    const parent2 = password.parentNode;
    p.style.color = "red";
    p.style.fontSize = "12px";
    p.innerText = "Fields cannot be empty";
    p2.style.color = "red";
    p2.style.fontSize = "12px";
    p2.innerText = "Fields cannot be empty";
    parent.appendChild(p);
    parent2.appendChild(p2);
  } else {
    e.preventDefault();
  }
});

inputAll.forEach((input) => {
  input.addEventListener("keydown", function (e) {
    const parent = this.parentElement;
    parent.lastChild.innerText = "";
  });
});
