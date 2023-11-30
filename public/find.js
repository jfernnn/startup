class Find {

  constructor(){
    //localStorage.setItem('person-name', "Josh")
    const searchNameEl = document.querySelector('.person-name');
    searchNameEl.textContent = ""
  }

 toggleSearch() {
    var show = document.getElementById("show-person");
  
    show.style.display = 'block';
  }
}


async function searchPerson() {
    const searchName = document.getElementById("person").value;

    let users = [];
    try {
      const response = await fetch('/api/users');
      users = await response.json();

      localStorage.setItem('users', JSON.stringify(users));

    } catch {
      const invalidEl = document.querySelector('.invalid-login');
      invalidEl.textContent = "User not found";
    }

    const searchResults = users.filter(user => user.first_name.toLowerCase().includes(searchName.toLowerCase()));
    const usersFound = document.querySelector('#person-name');

    usersFound.innerHTML = ``;
    if(searchResults.length === 0) usersFound.innerHTML = `<div class="row justify-content-md-center"><div class="col col-lg-2"> No one found</div></div>`;         

    searchResults.forEach(user => {
        usersFound.innerHTML = 
        `<div class="row justify-content-md-center"><div class="col col-lg-2"><button type="button" onclick="loadUser('${user}')" class="btn btn-light"> ${user.first_name} </button></div></div>` + usersFound.innerHTML;         
    })

    console.log(searchResults.length);

}

function loadUser(user) {
  localStorage.setItem("found-user", user);
  window.location.href = "others.html";
}

function searchGroup(){
    const searchGroupName = document.getElementById("findGroup").value;

    console.log(searchGroupName);
    let groups = JSON.parse(localStorage.getItem('groups')) || [];

    const searchResults = groups.filter(group => group.name.toLowerCase().includes(searchGroupName.toLowerCase()));
    const nameString = document.querySelector('#group-name');
    if(searchResults.length === 0) {
        nameString.innerHTML = `No group found`;
    } else {
        nameString.innerHTML = `<a href="group.html">${searchResults[0].name}</a>`;
        localStorage.setItem("found-group", JSON.stringify(searchResults[0]));
        localStorage.setItem("current-group", JSON.stringify(searchResults[0]));

    }

    console.log(searchResults.length);
    localStorage.setItem('found-group', nameString);
 //   const personNameEl = document.querySelector('.group-name');
  //  personNameEl.textContent = localStorage.getItem('found-group');

}