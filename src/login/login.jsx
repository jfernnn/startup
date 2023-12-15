import React from 'react';
import Button from 'react-bootstrap/Button';

export function Login() {
    const [userName, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [sch, setSchool] = React.useState('');


  
  async function login() {


    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({username: userName, password: password}),
    });
    console.log(response);
    if(response.ok) {
      console.log("WOKRED");
      const response = await fetch(`/api/users/${userName}`);
      user = await response.json();
      localStorage.setItem('current-user', JSON.stringify(user));
      localStorage.setItem('userName', userName);
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


    const newUser = {
      username : userName,
      password : password,
      first_name : name,
      last_name : lastName,
      school : sch,
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
        localStorage.setItem('userName', userName);
        window.location.href = "profile.html";
    } else {
        console.log("COULDNT REGISTER")
        const body = await response.json();
        const modalEl = document.querySelector('#error-message');
        modalEl.innerHTML = body.msg
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
  return (
    <div>
      <div id="user-login" className="text-center">
        <h1>Welcome</h1>
        <p>Login to find others</p>
        <div>
        <input
            className='form-control'
            type='text'
            onChange={(e) => setUsername(e.target.value)}
            placeholder='name'
          />
          <br />
          <input
            className='form-control'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
          />
          <br />
          <Button onClick={() => login()}>
            Login
          </Button>
        </div>
        <span className="invalid-login"></span>
        <p>Not a user yet?</p>
        <Button onClick={() => toggleRegister()} id="register-button">
          Register
        </Button>
      </div> 

      <div id="user-register" className="text-center">
        <h1>Welcome</h1>
        <p>Register!</p>
        <div>
        <input
            className='form-control d-flex justify-content-center'
            type='text'
            onChange={(e) => setUsername(e.target.value)}
            placeholder='name'
          />
          <br />
          <input
            className='form-control'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
          />
          <br />
          <input
            className='form-control'
            type='text'
            onChange={(e) => setName(e.target.value)}
            placeholder='josh'
          />
          <br />
          <input
            className='form-control'
            type='text'
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Ferb'
          />
          <br />
          <input
            className='form-control'
            type='text'
            onChange={(e) => setSchool(e.target.value)}
            placeholder='BYU'
          />
          <br />

          <Button onClick={() => register()}>
            Register
          </Button>
        </div>
        <div id="error-message">

        </div>
      </div> 
      <div>
        <p className="text-center">Start off in a good mood with a joke</p>
        <div id="joke"></div>
      </div>
      </div>
  );
}