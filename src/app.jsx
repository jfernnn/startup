import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
      <div>
        <header>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
              <a class="navbar-brand" href="index.html"><h1><sup>&boxbox;</sup>Study Buddy Hero<sup>&boxbox;</sup></h1></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="profile.html">Profile</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="find.html">Find Others</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="book.html">Book a Study Room</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="new_group.html">Create A Group</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
  
        <main>App components go here</main>
  
        <footer>
          <div class="footer fixed-bottom bg-light">
            <span class="text-reset">Author: Joshua Fernelius</span>
            <a href="https://github.com/jfernnn/startup">GitHub</a>
          </div>
        </footer>
      </div>
    );
  }