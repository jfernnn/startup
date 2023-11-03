class Profile {

    constructor(){

    const profileNameEl = document.querySelector('.profile-name');
    profileNameEl.textContent = localStorage.getItem('userName');
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