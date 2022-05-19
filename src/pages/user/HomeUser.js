import React from "react";
import ContainerImg from "../../components/containerImg";
import CardLagu from "../../components/card"
import NavbarUser from "../../components/navbar/NavbarUser";
import { dataLagu } from "../../fakeData/dataLagu";
import { NavLink } from "react-router-dom";


function HomeUser() {
  return (
    // Code Here
    <div>
     <NavbarUser/>  
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

export default HomeUser ;
    