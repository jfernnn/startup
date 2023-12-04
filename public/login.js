

async function login() {
    const nameOfUser = document.getElementById("userName").value;
    const userPassword = document.getElementById("password").value;

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({username: nameOfUser, password: userPassword}),
    });
    console.log(response);
    if(response.ok) {
      console.log("WOKRED");
      const response = await fetch(`/api/users/${nameOfUser}`);
      user = await response.json();
      localStorage.setItem('current-user', JSON.stringify(user));
      localStorage.setItem('userName', nameOfUser);
      window.location.href = "profile.html";
    } else {
      console.log("COULDNT REGISTER")
      const body = await response.json();
      console.log(body.msg)

      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
}

async function register() {
    const un = document.getElementById("regUserName").value;
    const p = document.getElementById("regPassword").value;
    const fn = document.getElementById("firstName").value;
    const ln = document.getElementById("lastName").value;
    const sn = document.getElementById("schoolName").value;


    const newUser = {
      username : un,
      password : p,
      first_name : fn,
      last_name : ln,
      school : sn,
      buddies : [],
      messages : []
    };
    const response = await fetch('/api/auth/create', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newUser),
    });
    if(response.ok) {
        console.log("WOKRED");
        localStorage.setItem('current-user', JSON.stringify(newUser));
        localStorage.setItem('userName', un);
        window.location.href = "profile.html";
    } else {
        console.log("COULDNT REGISTER")
        const body = await response.json();
        const modalEl = document.querySelector('#error-message');
        modalEl.innerHTML = body.msg
    }
}

function logout() {
  localStorage.removeItem('userName');
  localStorage.removeItem('current-user');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}


function toggleRegister() {
  var reg = document.getElementById("user-register");
  var log = document.getElementById("user-login");

  reg.style.display = 'block';
  log.style.display = 'none';
}

function displayQuote(data) {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#joke');
      console.log(data);
      const jokeEl = document.createElement('p');
      jokeEl.classList.add('joke');

      jokeEl.textContent = data.value;

      containerEl.appendChild(jokeEl);
    });
}

displayQuote();