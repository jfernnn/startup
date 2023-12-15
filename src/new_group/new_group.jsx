import React from 'react';

export function New_Group() {

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
    
    

  return (
      <div>
      <div id="small-screen">
        <div className="d-flex justify-content-center">
          <h1>Create a Group</h1>
        </div>

        <div className="d-flex justify-content-center">
          <div>
            <label for="new-group-name">Group Name</label>
            <input type="text" class="form-control" id="new-group-name" placeholder="Josh's group"></input>

            <label for="new-class-name">Class Name</label>
            <input type="text" class="form-control" id="new-class-name" placeholder="Art History 101"></input>

            <label for="new-group-description">Group Description</label>
            <textarea className="form-control" id="new-group-description" rows="3"></textarea>

            <button onClick={() => createGroup()} className="btn btn-dark">Create</button>
          </div>
        </div>
        <div id="error-message">

        </div>
      </div>
      </div>
  );
}