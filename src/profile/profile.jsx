import React from 'react';

export function Profile() {

    (async () => {
        const currUser = JSON.parse(localStorage.getItem('current-user'));
        if (currUser) {
          document.querySelector('.profile-name').textContent = currUser.username;
          document.querySelector('.first-name').textContent = currUser.first_name;
          
          const ii = document.querySelector("#buddiess")
          if(currUser.buddies.length === 0) ii.innerHTML = `<div class="row justify-content-md-center"><div class="col col-lg-2"><button type="button" onclick="window.location.href = 'find.html';" class="btn btn-light"> Add some buddies! </button></div></div>` + ii.innerHTML;         
    
          currUser.buddies.forEach(bud => {
              ii.innerHTML = 
              `<div class="row justify-content-md-center"><div class="col col-lg-2"><button type="button" onclick="loadBuddy('${bud}')" class="btn btn-light"> ${bud} </button></div></div>` + ii.innerHTML;         
          })
    
          setDisplay('not-logged-in', 'none');
          setDisplay('logged-in', 'block');
        } else {
          setDisplay('not-logged-in', 'block');
          setDisplay('logged-in', 'none');
        }
        try {
            const response = await fetch('/api/groups');
            let groups = await response.json();
            localStorage.setItem('groups', JSON.stringify(groups));
    
            const iii = document.querySelector("#groupss");
            iii.innerHTML = ``;
            var noGroups = true;
    
            if(groups != null){
              groups.forEach(group => {
                group.members.forEach(mem => {
    
                    if(mem.username === currUser.username) {
                        iii.innerHTML = 
                        `<div class="row justify-content-md-center"><div class="col col-lg-2"><button type="button" onclick="loadGroup('${group.name}')" class="btn btn-light"> ${group.name} </button></div></div>` + iii.innerHTML;         
                        noGroups = false;
                    }
                })
              })
            }
            if(noGroups) iii.innerHTML = `<div class="row justify-content-md-center"><div class="col col-lg-2"><button type="button" onclick="window.location.href = 'find.html';" class="btn btn-light"> Add some groups! </button></div></div>`;         
        } catch {
            const iii = document.querySelector("#groupss");
            iii.innerHTML = "Error displaying groups";
        }
    })();
    
    function loadBuddy(bud) {
        
        console.log("success")
        console.log(bud)
    
        const users = JSON.parse(localStorage.getItem('users'));
    
        console.log(users)
        const searchResults = users.filter(user => user.username.includes(bud));
        console.log(searchResults);
    
        localStorage.setItem("found-user", JSON.stringify(searchResults[0]));
    
        window.location.href = "others.html";
    }
    
    function logout() {
        localStorage.removeItem('userName');
        localStorage.removeItem('current-user');
        fetch(`/api/auth/logout`, {
          method: 'delete',
        }).then(() => (window.location.href = '/'));
    }
    
    function loadLogin() {
        window.location.href = 'index.html'
    }
    
    function loadGroup(groupName) {
        const groups = JSON.parse(localStorage.getItem('groups'));
        const searchResults = groups.filter(group => group.name.includes(groupName));
    
        localStorage.setItem("current-group", JSON.stringify(searchResults[0]));
        window.location.href = "group.html";
    }
    
    
    
    setInterval(() => {
        const exampleMessages = [
            "Hey, wanna meet up on friday?",
            "Lets cancel plans tonight. I'm sorry about that.",
            "How far have you made it on Prof Mattisons assignemnt?",
            "What class are you thinking of taking next semester?",
            "I failed my test today :( how did you do?",
            "I can't get this dumb math problem figured out. Any help you can give me?",
            "Coding gives me such a headache sometimes",
            "Luckily Jenn was able to help me out today. Do you need some pointers?",
            "Have you tried asking the TAs for help?"
        ]
        const exampleFriends = ["Matt", "Thomas", "Mary", "John", "Elsa", "Carie", "Emma", "Andrew", "Nelson"]
        let num = Math.floor(Math.random() * 8);
        let num2 = Math.floor(Math.random() * 8);
        const chatText = document.querySelector('#friend-messages');
        chatText.innerHTML =
          `<div class="event"><span class="player-event"><dt class="col-sm-22"> ${exampleFriends[num2]}</div></span> <dd class="col-sm-22">"${exampleMessages[num]}"</div></div>` + chatText.innerHTML;
      }, 5000);
    
    function setDisplay(controlId, display) {
        const playControlEl = document.querySelector(`#${controlId}`);
        if (playControlEl) {
          playControlEl.style.display = display;
        }
    }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>

      <div id="logged-in" style="display: none">
      <h1><span class="first-name"></span>'s Profile</h1>
      <span class="profile-name"></span>

      
        <h3>Your Groups</h3>
        <div class="container">
          <div class="row justify-content-md-center">

            <div id="groupss">
            </div>
          </div>
        </div>


        <br />
        <h3>Your Study Buddies</h3>
        <div class="container">
          <div class="row justify-content-md-center">
            <div id="buddiess">
            </div>
          </div>

          <br />
        </div>

        <h3>Messages From Others</h3>
        <div class="row justify-content-md-center">
          <div id="friend-messages">
            <div class="event">
              <span class="friend-event">
                <dt class="col-sm-22">Jenny</dt>
              </span> 
              <dd class="col-sm-22">"Lorem ipsum dolor sit amet"</dd>
            </div>
          </div>
        </div>
        <button onclick="logout()">Logout</button>
      </div>
      <div id="not-logged-in" style="display: none">
        <br />
        <br />
        <button onclick="loadLogin()">Log in!</button>
      </div>

      </div>
    </main>
  );
}