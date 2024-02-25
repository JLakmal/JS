const username = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
form.addEventListener("submit", (e) => {
  let meassage = [];
  if (username.value === "" || username.value == null) {
    meassage.push("name is required");
  }
  if (password.value.length <= 6) {
    meassage.push("password must be longer 6 charter ");
  }
  if (password.value.length >= 20) {
    meassage.push("password must be less than 20 charter ");
  }
  if (password.value === "password" || password.value === "Password") {
    meassage.push("password cannot be password ");
  }
  if (meassage.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = meassage.join(",");
  }
});
