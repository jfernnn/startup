class Profile {

    constructor(){
        const currUser = JSON.parse(localStorage.getItem('current-user'));
    
        const profileNameEl = document.querySelector('.profile-name');
        profileNameEl.textContent = currUser.username;
        const firstNameEl = document.querySelector('.first-name');
        firstNameEl.textContent = currUser.first_name;


        const groups = JSON.parse(localStorage.getItem('groups'));

        const iii = document.querySelector("#groupss");

        iii.innerHTML = "";
        var noGroups = true;
        if(groups != null){
          groups.forEach(group => {
            console.log("group", group)
            group.members.forEach(mem => {
                if(mem.username === currUser.username) {
                    iii.innerHTML = 
                    `<div class="row justify-content-md-center"><div class="col col-lg-2"><button type="button" onclick="loadGroup('${group}')" class="btn btn-light"> ${group} </button></div></div>` + iii.innerHTML;         
                    noGroups = false;
                }
            })
          })
        }

        if(noGroups) iii.innerHTML = `<div class="row justify-content-md-center"><div class="col col-lg-2"><button type="button" onclick="window.location.href = 'find.html';" class="btn btn-light"> Add some groups! </button></div></div>`;         


        const ii = document.querySelector("#buddiess")
    
        if(currUser.buddies.length === 0) ii.innerHTML = `<div class="row justify-content-md-center"><div class="col col-lg-2"><button type="button" onclick="window.location.href = 'find.html';" class="btn btn-light"> Add some buddies! </button></div></div>` + ii.innerHTML;         

        currUser.buddies.forEach(bud => {
            ii.innerHTML = 
            `<div class="row justify-content-md-center"><div class="col col-lg-2"><button type="button" onclick="loadBuddy('${bud}')" class="btn btn-light"> ${bud} </button></div></div>` + ii.innerHTML;         

        })
    }

    getProfileName() {
        let us = [];
        let usTest = localStorage.getItem('users');
        if(usTest) {
            us = JSON.parse(usTest);
        }
        let names = "";
        for(let u in us) {
            names += u.username;
        }
        return us;

    }
}

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

function loadGroup(groupName) {

    const groups = JSON.parse(localStorage.getItem('groups'));

    console.log(groups)
    const searchResults = groups.filter(group => group.name.includes(groupName));

    console.log(searchResults[0]);
    localStorage.setItem("current-group", JSON.stringify(searchResults[0]));

    window.location.href = "group.html";


}

const profile = new Profile();


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