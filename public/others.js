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