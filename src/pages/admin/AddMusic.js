import React from "react";
import NavbarAdmin from '../../components/navbar/NavbarAdmin';



function AddMusic() {
  return (
    // Code Here
    <div>
           <div>
           <NavbarAdmin/>
           </div>

          <div className="container" style={{ width: "1000px", padding: "20px 50px", marginTop: '150px' }}>
              <h3 style={{marginLeft: "50px"}}>Add Music</h3>
           <div className="row mx-4 mt-3" style={{paddingLeft: "11px", paddingRight: "11px"}}>
               <div className="col-8">
            <input  type="text" className="upTitle form-control " placeholder="Title" name="title" />
            </div>
            <div className="col">
            <div className="upFoto"> <input type="file" id="image" name="image" hidden /> <label style={{padding: "10px"}} for='image'>Attach Thumbnail</label></div>
            </div>
          </div>
           <div className="row mx-5 mt-3">
            <input  type="text" className="form-control Addartis" placeholder="Year" name="year" />
          </div>
           <div className="row mx-5 mt-3">
            <input  type="text" className="form-control Addartis" placeholder="Singer" name="singer" />
          </div>
         
          <div className="row mx-5 mt-3">
          <div className="upLagu"> <input type="file" id="image" name="image" hidden /> <label style={{padding: "10px"}} for='image'>Attach Music</label></div>

            </div>

          <div className="row mx-5 mt-3 mb-4">
            <button type="submit" className="btnAdd">Add Music</button>
          </div>

           </div>

         
           </div>
  );
}

export default AddMusic;
    