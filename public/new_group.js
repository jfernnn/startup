async function createGroup() {
    const groupName = document.getElementById("new-group-name").value
    const className = document.getElementById("new-class-name").value
    const groupDesc = document.getElementById("new-group-description").value

    const currentUser = JSON.parse(localStorage.getItem('current-user'));

    const newGroup = {
        name : groupName,
        class_name : className,
        desc : groupDesc,
        members : [currentUser]
    }

    try {
        const response = await fetch('/api/groups', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(newGroup),
        });
        if(response.ok) {
            const groups = await response.json();
            localStorage.setItem('current-group', JSON.stringify(newGroup));
            window.location.href = "group.html";    
        } else {
            console.log("COULDNT REGISTER")
            const body = await response.json();
            const modalEl = document.querySelector('#error-message');
            modalEl.innerHTML = body.msg;
        }

      } catch {
        const modalEl = document.querySelector('#error-message');
        modalEl.innerHTML = "Error creating group";
      }
}

