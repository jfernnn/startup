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

const find = new Find();

function searchPerson() {
    const searchName = document.getElementById("person").value;

    console.log(searchName);
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const searchResults = users.filter(user => user.first_name.toLowerCase().includes(searchName.toLowerCase()));
    const nameString = document.querySelector('#person-name');
    if(searchResults.length === 0) {
        nameString.innerHTML = `No one found`;
    } else {
        nameString.innerHTML = `<a href="others.html">${searchResults[0].first_name}</a>`;
        localStorage.setItem("found-user", JSON.stringify(searchResults[0]));
    }

    console.log(searchResults.length);
    localStorage.setItem('found-name', nameString);
 //   const personNameEl = document.querySelector('.person-name');
 //   personNameEl.textContent = localStorage.getItem('found-name');

 //   toggleSearch();
    

//    localStorage.setItem("userName", nameOfUser.value);
//    window.location.href = "find.html";
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
    }

    console.log(searchResults.length);
    localStorage.setItem('found-group', nameString);
 //   const personNameEl = document.querySelector('.group-name');
  //  personNameEl.textContent = localStorage.getItem('found-group');

}