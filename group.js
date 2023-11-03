class Group {

    constructor() {
        const groupNameEl = document.querySelector('.group-name');
        groupNameEl.textContent = localStorage.getItem('group-name');
        const classNameEl = document.querySelector('.class-name');
        classNameEl.textContent = localStorage.getItem('class-name');
        const groupDescEl = document.querySelector('.group-desc');
        groupDescEl.textContent = localStorage.getItem('group-desc');

        const mems = JSON.parse(localStorage.getItem('current-group'));

        let ms = "";

        mems.members.forEach(member => {
            ms += member.username;
            ms += ", ";
        })

        const membersEl = document.querySelector('.members');
        membersEl.textContent = ms;


    }
}

const group = new Group();