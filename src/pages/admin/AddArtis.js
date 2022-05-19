import React from "react";
import NavbarAdmin from '../../components/navbar/NavbarAdmin';



function AddArtis() {
  return (
    // Code Here
    <div>
           <div>
           <NavbarAdmin/>
           </div>

          <div className="container"style={{ width: "1000px", padding: "20px 50px", marginTop: '150px' }}>
              <h3 style={{marginLeft: "50px"}}>Add Artis</h3>
            <form>  
             <div className="row mx-5 mt-3">
           
            <input  type="text" className="form-control Addartis" placeholder="Name" name="name" />
          </div>
           <div className="row mx-5 mt-3">
            <input  type="text" className="form-control Addartis" placeholder="old" name="old" />
          </div>
           <div className="row mx-5 mt-3">
            <select  style={{color:"white"}} name="singer" className="Addartis">
              <option style={{color:"white"}} value="volvo">BTS</option>
              <option  style={{color:"white"}} value="saab">Olivia Rodrigo</option>
              <option  style={{color:"white"}} value="fiat">Blackpink</option>
              <option  style={{color:"white"}}  value="audi">Justin Bieber</option>
            </select>
           {/* <input  type="text" className="form-control Addartis" placeholder="Name" name="name" /> */}
          </div>
           <div className="row mx-5 mt-3">
            <input  type="text" className="form-control Addartis" placeholder="Start a Career" name="karir" />
          </div>

          <div className="row mx-5 mt-3 mb-4">
            <button type="submit" className="btnAdd">Save</button>
          </div>
          </form>
           </div>

         
           </div>
  );
}

export default AddArtis;
    