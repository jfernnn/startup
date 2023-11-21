class Others {
    constructor() {
        const foundUser = JSON.parse(localStorage.getItem('found-user'));

        const currUser = JSON.parse(localStorage.getItem('current-user'));
    
        var show = document.getElementById("friend-button");
        show.style.display = 'block';

        if(currUser.buddies.length > 0){
            currUser.buddies.forEach(bud => {
                if(bud === foundUser.username) show.style.display = 'none';

            })
        }
    
        console.log(foundUser);

        const profileNameEl = document.querySelector('.found-name');
        profileNameEl.textContent = foundUser.username;
     //   const firstNameEl = document.querySelector('.first-name');
   //     firstNameEl.textContent = foundUser.first_name;


        const groups = JSON.parse(localStorage.getItem('groups'));

        const iii = document.querySelector("#groupssss");

        if(groups != null) {
        groups.forEach(group => {
            console.log("group", group)
            group.members.forEach(mem => {
                if(mem.username === foundUser.username) {
                    iii.innerHTML = 
                    `<div class="row justify-content-md-center"><div class="col col-lg-2"><button type="button" class="btn btn-light"> ${group.name} </button></div></div>` + iii.innerHTML;         
                }
            })
        })}

        const ii = document.querySelector("#buddiess")
    
        foundUser.buddies.forEach(bud => {
            ii.innerHTML = 
            `<div class="row justify-content-md-center"><div class="col col-lg-2"><button type="button" onclick="loadBuddy('${bud}')" class="btn btn-light"> ${bud} </button></div></div>` + ii.innerHTML;         

        })

    }
}

const others = new Others();

async function loadMessages() {
            let messages = [];
            try {
              // Get the latest high scores from the service
              const response = await fetch('/api/messages');
              messages = await response.json();
          
              // Save the scores in case we go offline in the future
              localStorage.setItem('messages', JSON.stringify(messages));
            } catch {
                
              // If there was an error then just use the last saved scores
              const messageText = localStorage.getItem('messages');
              if (messageText) {
                messages = JSON.parse(messageText);
              }
            }
          
            displayMessages(messages);
}

function displayMessages(messages) {
            const tableBodyEl = document.querySelector('#message_display');
            messages = [];
            let m = {
                messageContent : "KLKL",
                sentUser : "Joshua",
                date : "1234"
            }
            messages.push(m);
            if (messages.length) {
              // Update the DOM with the scores
              for (const [i, message] of messages.entries()) {
                const dateTdEl = document.createElement('td');
                const usernameTdEl = document.createElement('td');
                const textTdEl = document.createElement('td');
          
                textTdEl.textContent = message.messageContent;
                usernameTdEl.textContent = message.sentUser;
                dateTdEl.textContent = message.date;
          
                const rowEl = document.createElement('tr');
                rowEl.appendChild(usernameTdEl);
                rowEl.appendChild(textTdEl);
                rowEl.appendChild(dateTdEl);

                tableBodyEl.appendChild(rowEl);
              }
            } else {
              //tableBodyEl.innerHTML = '<tr><td colSpan=4>No messages</td></tr>';
            }
}

loadMessages();

async function postMessage() {
    const mc = document.getElementById("textarea").value;
    const fu = JSON.parse(localStorage.getItem('found-user'));
    const cu = JSON.parse(localStorage.getItem('current-user'));
    const d = new Date().toLocaleDateString();
  
    const message = {
      messageContent : mc,
      sentUser : fu.userName,
      receiveUser : cu.username,
      date : d
    }
    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(message),
      });
  
      const messages = await response.json();
      console.log("MADE IT");
      console.log(messages);
      localStorage.setItem('messages', JSON.stringify(messages));
    } catch {
      console.log("OJID")
      let messages = [];
      messages=localStorage.getItem('messages');
      messages.push(message); 
      localStorage.setItem('messages', JSON.stringify(messages));    
    }
}


function addFriend() {
    const currUser = JSON.parse(localStorage.getItem('current-user'));
    const foundUser = JSON.parse(localStorage.getItem('found-user'));

    if(currUser.buddies.length > 0){
        currUser.buddies.forEach(bud => {
            console.log(bud)
            if(bud === foundUser.username){
                 return;
            }
        })
    }

    currUser.buddies.push(foundUser.username);
    foundUser.buddies.push(currUser.username);

    console.log("current user: ", currUser);
    console.log("Found userL: ", foundUser);

    const users = JSON.parse(localStorage.getItem('users'));
    if(users != null) {
    users.forEach(user => {
        console.log(user);
        if(currUser.username === user.username) {
            user.buddies.push(foundUser.username);
        }
        if(foundUser.username === user.username) {
            user.buddies.push(currUser.username);
        }
    })}
    console.log(users);

    localStorage.setItem("current-user", JSON.stringify(currUser));
    localStorage.setItem("found-user", JSON.stringify(foundUser));
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "others.html";
}

function loadBuddy(bud) {
    console.log("success")
    console.log(bud)

    const users = JSON.parse(localStorage.getItem('users'));

    const searchResults = users.filter(user => user.username.includes(bud));
    console.log(searchResults);

    localStorage.setItem("found-user", JSON.stringify(searchResults[0]));

    window.location.href = "others.html";


}