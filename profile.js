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