const input = document.querySelector("input");
const loginBtn = document.querySelector("#login");
const logoutBtn = document.querySelector("#logout");
const h1 = document.querySelector("h1");

loginBtn.onclick = () => {
  if (input.value) {
    localStorage.setItem("token", input.value);
    h1.innerHTML = "welcome User";
  }
};
if (localStorage.key("token")) {
  h1.innerHTML = "welcome User";
}
logoutBtn.onclick = () => {
  localStorage.clear();
  location.reload();
};
