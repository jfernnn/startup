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
    let nameString = "";
    if(searchResults.length === 0) {
        nameString = "No one found";
    } else {
        nameString = searchResults[0].first_name;
    }

    console.log(searchResults.length);
    localStorage.setItem('found-name', nameString);
    const personNameEl = document.querySelector('.person-name');
    personNameEl.textContent = localStorage.getItem('found-name');

 //   toggleSearch();
    

//    localStorage.setItem("userName", nameOfUser.value);
//    window.location.href = "find.html";
  }

function searchGroup(){
    const searchGroupName = document.getElementById("findGroup").value;

    console.log(searchGroupName);
    let groups = JSON.parse(localStorage.getItem('groups')) || [];

    const searchResults = groups.filter(group => group.name.toLowerCase().includes(searchGroupName.toLowerCase()));
    let nameString = "";
    if(searchResults.length === 0) {
        nameString = "No group found";
    } else {
        nameString = searchResults[0].name;
    }

    console.log(searchResults.length);
    localStorage.setItem('found-group', nameString);
    const personNameEl = document.querySelector('.group-name');
    personNameEl.textContent = localStorage.getItem('found-group');

}