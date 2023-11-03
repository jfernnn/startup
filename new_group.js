function createGroup() {
    const groupName = document.getElementById("new-group-name").value
    const className = document.getElementById("new-class-name").value
    const groupDesc = document.getElementById("new-group-description").value

    const newGroup = {
        name : groupName,
        class_name : className,
        desc : groupDesc,
        members : []
    }

 //   const users = JSON.parse(localStorage.getItem('users')) || [];

    //const currentUser = users.filter(user => user.username.toLowerCase().includes(localStorage.getItem('username')));

   // console.log(currentUser);
    const groups = JSON.parse(localStorage.getItem('groups')) || [];
    const currentUser = JSON.parse(localStorage.getItem('current-user'));

    newGroup.members.push(currentUser);
    groups.push(newGroup);



    localStorage.setItem('groups', JSON.stringify(groups));
    localStorage.setItem('group-name', groupName);
    localStorage.setItem('class-name', className);
    localStorage.setItem('group-desc', groupDesc);
    localStorage.setItem('current-group', JSON.stringify(newGroup));


   // localStorage.setItem("userName", nameOfUser.value);
    //window.location.href = "profile.html";
    window.location.href = "group.html";
}