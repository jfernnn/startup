class Group {

    constructor() {
        const currGroup = JSON.parse(localStorage.getItem('current-group'));
        const currUser = JSON.parse(localStorage.getItem('current-user'));

        const groupNameEl = document.querySelector('.group-name');
        groupNameEl.textContent = currGroup.name;
        const classNameEl = document.querySelector('.class-name');
        classNameEl.textContent = currGroup.class_name;
        const groupDescEl = document.querySelector('.group-desc');
        groupDescEl.textContent = currGroup.desc;


        let ms = "";
        let alreadyMember = false;
        var show = document.getElementById("group-button");
        show.style.display = 'block';


        currGroup.members.forEach(member => {
            if(member.username === currUser.username) show.style.display = 'none';

            ms += member.username;
            ms += ", ";
        })

        ms = ms.substring(0, ms.length-2)
        const membersEl = document.querySelector('.members');
        membersEl.textContent = ms;


    }
}

const group = new Group();


function addGroup() {
    const currUser = JSON.parse(localStorage.getItem('current-user'));
    const currGroup = JSON.parse(localStorage.getItem('current-group'));
    const groups = JSON.parse(localStorage.getItem('groups'));


    if(currGroup.members.length > 0){
        currGroup.members.forEach(member => {
            console.log(member)
            if(member === currUser.username){
                 return;
            }
        })
    }

    currGroup.members.push(currUser.username);


    console.log("current user: ", currUser);


    groups.forEach(group => {
        console.log(group);
        if(currGroup.name === group.name) {
            group.members.push(currUser);
        }
    })
    console.log(groups);

    localStorage.setItem("current-group", JSON.stringify(currGroup));
    localStorage.setItem("groups", JSON.stringify(groups));

    window.location.href = "group.html";
}