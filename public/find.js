async function searchPerson() {
    const searchName = document.getElementById("person").value;

    let users = [];
    try {
      const response = await fetch('/api/users');
      users = await response.json();

      localStorage.setItem('users', JSON.stringify(users));
    } catch {

    }
    const searchResults = users.filter(user => user.first_name.toLowerCase().includes(searchName.toLowerCase()));
    const usersFound = document.querySelector('#person-name');

    usersFound.innerHTML = ``;
    if(searchResults.length === 0) usersFound.innerHTML = `<div class="row justify-content-md-center"><div class="col col-lg-2"> No one found</div></div>`;         
    searchResults.forEach(user => {
        usersFound.innerHTML = 
        `<div class="row justify-content-md-center"><div class="col col-lg-2"><button type="button" onclick="loadUser('${user.username}')" class="btn btn-light"> ${user.first_name} </button></div></div>` + usersFound.innerHTML;         
    })
}

async function loadUser(userName) {
  const users = JSON.parse(localStorage.getItem('users'));
  const searchResults = users.filter(user => user.username.includes(userName));

  localStorage.setItem("found-user", JSON.stringify(searchResults[0]));
  window.location.href = "others.html";
}

async function searchGroup(){
    const searchGroupName = document.getElementById("findGroup").value;

    let groups = [];
    try {
      const response = await fetch('/api/groups');
      groups = await response.json();

      localStorage.setItem('groups', JSON.stringify(groups));
    } catch {

    }
    const searchResults = groups.filter(group => group.name.toLowerCase().includes(searchGroupName.toLowerCase()));
    const groupsFound = document.querySelector('#group-name');

    groupsFound.innerHTML = ``;
    if(searchResults.length === 0) {
        groupsFound.innerHTML = `No group found`;
    } else {
      searchResults.forEach(group => {
        groupsFound.innerHTML = 
        `<div class="row justify-content-md-center"><div class="col col-lg-2"><button type="button" onclick="loadGroup('${group.name}')" class="btn btn-light"> ${group.name} </button></div></div>` + groupsFound.innerHTML;         
      })
  }
}

function loadGroup(groupName) {
  const groups = JSON.parse(localStorage.getItem('groups'));
  const searchResults = groups.filter(group => group.name.includes(groupName));
  
  localStorage.setItem("current-group", JSON.stringify(searchResults[0]));
  window.location.href = "group.html";
}