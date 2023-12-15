import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Book } from './book/book';
import { Find } from './find/find';
import { Group } from './group/group';
import { Login } from './login/login';
import { New_Group } from './new_group/new_group';
import { Others } from './others/others';
import { Profile } from './profile/profile';


import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className='nav-link' to=''>
                    <h1>Study Buddy Hero</h1>
                  </NavLink>
                </li>
              </ul>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className='nav-link' to='profile'>
                      Profile
                    </NavLink>                  
                  </li>
                  <li className="nav-item">
                    <NavLink className='nav-link' to='find'>
                      Find Others
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className='nav-link' to='book'>
                      Book a Room
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className='nav-link' to='new_group'>
                      Create a Group
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className='nav-link' to='about'>
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
  
        <main>
            <div>
            App components go here
            </div>
            <div>
                Hello
            </div>
            <div>
                No good
            </div>
            <div>
                What up
            </div>
        </main>


        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/book' element={<Book />} />
          <Route path='/find' element={<Find />} />
          <Route path='/group' element={<Group />} />
          <Route path='/new_group' element={<New_Group />} />
          <Route path='/others' element={<Others />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
  
        <footer>
          <div className="footer fixed-bottom bg-light">
            <span className="text-reset">Author: Joshua Fernelius</span>
            <a href="https://github.com/jfernnn/startup">GitHub</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}
  
export default App;