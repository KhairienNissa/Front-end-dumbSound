import React from "react";

import Navbar from "../components/navbar/Navbar";
import ContainerImg from "../components/containerImg";
import CardLagu from "../components/card";
import NavbarUser from "../components/navbar/NavbarUser";
import {isLogin} from '../config/isLogin'
import { dataLagu } from "../fakeData/dataLagu";


function Home() {
  return (
    // Code Here
    <div>
       <Navbar/>
      <ContainerImg/>
      <h3 className="Rasakan">Dengarkan Dan Rasakan</h3>
<div className="row mx-4 justify-content-center">
{dataLagu?.map((item, index) => {
             return <CardLagu item={item} key={index}/>
                 })} 
      
     </div>
    </div>
  );
}

export default Home;