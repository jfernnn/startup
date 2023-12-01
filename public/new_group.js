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
        const groups = await response.json();
        localStorage.setItem('current-group', JSON.stringify(newGroup));
        window.location.href = "group.html";

      } catch {
        console.log("COULDNT CREATE GROUP")
      }
}

