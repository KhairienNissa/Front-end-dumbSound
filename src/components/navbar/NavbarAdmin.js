import React, {useContext} from 'react'
import frame from '../../assets/logoD.png'
import DumbSOUND from '../../assets/DUMBSOUND.png'
import { isLogin } from "../../config/isLogin";
import jungkook from '../../assets/jungkook.jpeg';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';


function NavbarAdmin() {

  const [state, dispatch] = useContext(UserContext)
    const navigate = useNavigate()
    const logout = () => {
      dispatch({
          type: "LOGOUT"
      })
      navigate("/")
  }
  return (
    // Code Here
    <div>
      
     <nav class="navbar fixed-top navbar-expand-lg warna-nav">
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

        <div class="collapse navbar-collapse pt-0" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            {/* {isLogin ? } */}
    
            <li class="nav-item dropdown">
          <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={jungkook} width='55px' className="rounded-circle border border-3 border-light"/>
          </a>
          <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink" style={{borderRadius : "10px"}}>
            <li style={{  borderBottom: '3px solid #EE4622',  padding: "7px"}}>
              <a class="dropdown-item pointer"  onClick={()=> navigate("/add-music")} style={{color: "#EE4622"}} >Add Music</a> </li>
            <li style={{  borderBottom: '3px solid #EE4622', padding: "7px"}}> <a class="dropdown-item textLink pointer" style={{color: "#EE4622"}} onClick={()=> navigate("/list-transaction")}>List User</a> </li>
            <li style={{  borderBottom: '3px solid #EE4622', padding: "7px"}}> <a class="dropdown-item textLink pointer" style={{color: "#EE4622"}} onClick={()=> navigate("/add-artis")}>Add Artis</a> </li>
            <li style={{  borderBottom: '3px solid #EE4622',   padding: "7px"}}> <a class="dropdown-item textLink  pointer" style={{color: "#EE4622" }} onClick={()=> navigate("/complain-admin")} >Complain</a> </li>
            <li style={{  padding: "7px"}}><a class="dropdown-item textLink pointer" href="#"  style={{  color: "#EE4622"}} onClick={logout}>Logout</a></li>
          </ul>
        </li>

          </ul>
        </div>
        </div>
    </nav>

    </div>
  );
}

export default NavbarAdmin;