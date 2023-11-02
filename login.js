function login() {
    const nameOfUser = document.querySelector("#userName");
    const userPassword = document.querySelector("#password");
    localStorage.setItem("userName", nameOfUser.value);
    window.location.href = "profile.html";
}

function register() {
  //const nameOfUser = document.querySelector("#userName");
  //const userPassword = document.querySelector("#password");
  const u = document.getElementById("regUserName").value;
  const p = document.getElementById("regPassword").value;
  const f = document.getElementById("firstName").value;
  const l = document.getElementById("firstName").value;
  const s = document.getElementById("schoolName").value;


  const newUser = {
    username : u,
    password : p,
    first_name : f,
    last_name : l,
    school : s
  }
  const users = JSON.parse(localStorage.getItem('users')) || [];

 // if(!found) {
  users.push(newUser);
 // }

  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('userName', u);

  /*
  document.getElementById('regUserName').value = "";
  document.getElementById('regPassword').value = "";
  document.getElementById('firstName').value = "";
  document.getElementById('firstName').value = "";
  document.getElementById('schoolName').value = "";
*/
  window.location.href = "profile.html";
}

function toggleRegister() {
  var reg = document.getElementById("user-register");
  var log = document.getElementById("user-login");

  reg.style.display = 'block';
  log.style.display = 'none';
}