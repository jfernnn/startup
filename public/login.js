async function login() {
    const nameOfUser = document.getElementById("userName").value;
    const userPassword = document.getElementById("password").value;

    let users = [];
    try {
      const response = await fetch('/api/users');
      users = await response.json();
      console.log(users)

      localStorage.setItem('users', JSON.stringify(users));

      const searchResults = users.filter(user => user.username.toLowerCase().includes(nameOfUser));

      if(searchResults.length > 0){
        if(searchResults[0].password === userPassword ) {
          if(searchResults[0].username === nameOfUser) {
            localStorage.setItem("userName", nameOfUser);
            localStorage.setItem("current-user",JSON.stringify(searchResults[0]));
            window.location.href = "profile.html";
          }
        } 
      }
    } catch {
      const invalidEl = document.querySelector('.invalid-login');
      invalidEl.textContent = "User not found";
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
      buddies : []
    };
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newUser),
      });
      const users = await response.json();
      console.log("WOKRED");

      localStorage.setItem('current-user', JSON.stringify(newUser));
      localStorage.setItem('userName', un);
  
      window.location.href = "profile.html";
    } catch {
      console.log("COULDNT REGISTER")
    }
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