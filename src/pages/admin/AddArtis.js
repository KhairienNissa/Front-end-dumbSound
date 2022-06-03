import React, { useState } from 'react'
import { useMutation } from "react-query";
import NavbarAdmin from '../../components/navbar/NavbarAdmin';
import {API} from '../../config/api'
import { Alert } from 'react-bootstrap'


function AddArtis() {
  const title = "Add Artis";
  document.title = "DumbMerch | " + title;

  let api = API();

  const [message, setMessage] = useState(null);
  const [artis, setArtis] = useState({
      name: '',
      old: '',
      startCareer: '',
      type: ''
  });

  const { name, old, startCareer, type} = artis;

  const handleChange = (e) => {
      setArtis({
          ...artis,
          [e.target.name]: e.target.value,
      });
  };

  const handleSubmit = useMutation(async (e) => {
      try {
          e.preventDefault();
  
          // Data body
          const body = JSON.stringify( artis );
      
          // Configuration
          const config = {
              method: "POST",
              headers: {
              "Content-type": "application/json",
              },
              body: body,
          };
      
          // Insert category data
          const response = await api.post("/artis", config);
      
          if (response.status == 'success') {
              const alert = (
                  <Alert variant="success" className="py-1 text-center m-auto w-30 mt-5">
                      Success add Artis
                  </Alert>
              );
              
              setArtis({
                  name: "",
                  old: "",
                  startCareer: "",
                  type: ""
              });

              setMessage(alert);
              
            } else {
              const alert = (
                <Alert variant="danger" className="py-1">
                  {response.message}
                </Alert>
              );
              setMessage(alert);
            }
      } catch (error) {
          console.log(error);
      }
  });
  return (
    // Code Here
    <div>
           <div>
           <NavbarAdmin/>
           </div>

          <div className="container"style={{ width: "1000px", padding: "20px 50px", marginTop: '150px' }}>
              <h3 style={{marginLeft: "50px"}}>Add Artis</h3>
              {message}
            <form onSubmit={(e) => handleSubmit.mutate(e)}>  
             <div className="row mx-5 mt-3">
           
            <input  type="text" className="form-control Addartis" placeholder="Name"value={name} name='name' onChange={handleChange}/>
          </div>
           <div className="row mx-5 mt-3">
            <input  type="text" className="form-control Addartis" placeholder="old" value={old} name='old' onChange={handleChange}  />
          </div>
           <div className="row mx-5 mt-3">
            <select  style={{color:"white"}} onChange={handleChange} value={type} name="type" required className="Addartis">
                          <option selected hidden>Type</option>
                            <option name="type">Solo</option>
                            <option name="type">Band</option>
            </select>
           {/* <input  type="text" className="form-control Addartis" placeholder="Name" name="name" /> */}
          </div>
           <div className="row mx-5 mt-3">
            <input  type="text" className="form-control Addartis" placeholder="Start a Career" value={startCareer} name='startCareer' onChange={handleChange} />
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
    