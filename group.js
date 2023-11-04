class Group {

    constructor() {
        const currGroup = JSON.parse(localStorage.getItem('current-group'));

        const groupNameEl = document.querySelector('.group-name');
        groupNameEl.textContent = currGroup.name;
        const classNameEl = document.querySelector('.class-name');
        classNameEl.textContent = currGroup.class_name;
        const groupDescEl = document.querySelector('.group-desc');
        groupDescEl.textContent = currGroup.desc;


        let ms = "";

        currGroup.members.forEach(member => {
            ms += member.username;
            ms += ", ";
        })

        const membersEl = document.querySelector('.members');
        membersEl.textContent = ms;


    }
}

const group = new Group();