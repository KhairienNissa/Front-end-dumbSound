import React from "react";
import frame from '../../assets/logoD.png'
import DumbSOUND from '../../assets/DUMBSOUND.png'
import jungkook from '../../assets/jungkook.jpeg';
import LoginModal from "../modal/loginModal";
import RegisterModal from "../modal/registerModal";


function Navbar() {
  return (
    // Code Here
    <div>
     
     <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div class="container">
         <div><img src={frame} class="navbar-brand"/> <span><img src={DumbSOUND}/></span></div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            {/* {isLogin ? } */}
    
            <li class="nav-item">
              {/* <button className="btnlogin">Login</button> */}
              <LoginModal/>
              {/* <a class="nav-link text-white" href="#">Pricing</a> */}
            </li>
            <li class="nav-item">
              {/* <a class="nav-link text-white" href="#">Contact</a> */}
              <RegisterModal/>
            </li>

          </ul>
        </div>
      </div>
    </nav>
     
    </div>
  );
}

export default Navbar;