

class Login {
  constructor() {

  }


  login() {
    const nameOfUser = document.getElementById("userName").value;
    const userPassword = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const searchResults = users.filter(user => user.username.toLowerCase().includes(nameOfUser));

    if(searchResults.length > 0){
      if(searchResults[0].password === userPassword) {
          localStorage.setItem("userName", nameOfUser);
          localStorage.setItem("current-user",JSON.stringify(searchResults[0]));
          window.location.href = "profile.html";
      } 
    }

  const invalidEl = document.querySelector('.invalid-login');
  invalidEl.textContent = "User not found";

  }

  register() {
    //const nameOfUser = document.querySelector("#userName");
    //const userPassword = document.querySelector("#password");
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
      buddies : []
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // if(!found) {
    users.push(newUser);
    //this.saveUser(newUser, users);

    // }

    //localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('current-user', JSON.stringify(newUser));
    localStorage.setItem('userName', un);

    /*
    document.getElementById('regUserName').value = "";
    document.getElementById('regPassword').value = "";
    document.getElementById('firstName').value = "";
    document.getElementById('firstName').value = "";
    document.getElementById('schoolName').value = "";
    */
    window.location.href = "profile.html";
  }
/*
  async saveUser(newUser, users) {
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newUser),
      });

      // Store what the service gave us as the high scores
      const uusers = await response.json();
      console.log("MADE IT");
      console.log(uusers);
      localStorage.setItem('users', JSON.stringify(uusers));
    } catch {
      // If there was an error then just track scores locally
      localStorage.setItem('users', JSON.stringify(users));    
    }
  }
  */
}

const log = new Login();



function toggleRegister() {
  var reg = document.getElementById("user-register");
  var log = document.getElementById("user-login");

  reg.style.display = 'block';
  log.style.display = 'none';
}

function destroy() {
    const u = [];
    const g = [];
    localStorage.clear();
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