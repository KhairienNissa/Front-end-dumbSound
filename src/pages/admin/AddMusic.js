import React, { useState, useEffect } from "react";
import { Alert } from 'react-bootstrap'
import NavbarAdmin from '../../components/navbar/NavbarAdmin';
import axios from "axios";
import { useMutation } from "react-query";

const API = axios.create({
    baseURL:   process.env.REACT_APP_SERVER_URL ||
    "https://khairien-dumbsound.herokuapp.com/api/v1" ||
    "http://localhost:5000/api/v1",
});


function AddMusic() {
    const desc = "Add Music";
    document.title = "Dumbsound | " + desc;

    const [message, setMessage] = useState(null);
    const [artiss, setArtiss] = useState([])
    
    // find artis
    const optionArtis = async () => {
        try {
            const response = await API.get(`/artiss`)
            console.log(response);
            setArtiss (response.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        optionArtis()
    }, [])

    const [form, setForm] = useState({
        title: '',
        year: '',
        thumbnail: '',
        attache: '',
        idArtis: ''
    })

    const [preview, setPreview] = useState('')

    const { title, year, thumbnail, attache, idArtis } = form

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name] : e.target.id === "attache" ? e.target.files : e.target.value && e.target.id === "thumbnail"? e.target.files:e.target.value
        })
      }

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();
            // Configuration
            const config = {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            };
            console.log(form);
            // Store data with FormData as object
            const formData = new FormData()
            formData.set("title", form.title)
            formData.set("year", form.year)
            formData.set("attache", form.attache[0], form.attache[0].name)
            formData.set("thumbnail", form.thumbnail[0], form.thumbnail[0].name)
            formData.set("idArtis", form.idArtis)
            
            // Insert product data
            const response = await API.post('/music', formData, config)
            console.log(response);

            // if success
            if (response?.data.status == 'success') {
                const alert = (
                    <Alert variant="success" className="py-1 text-center m-auto w-20 mt-5">
                        Success add Music
                    </Alert>
                );
                // make it clear after succes submit
                setForm({
                    title: '',
                    year: '',
                    thumbnail: '',
                    attache: '',
                    idArtis: ''
                })

                setMessage(alert)
            } else {
                const alert = (
                    <Alert variant="danger" className="py-1">
                        {response.data.message}
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
          
       
          <div className="container" style={{ width: "1000px", padding: "20px 50px", marginTop: '150px' }}>
              <h3 style={{marginLeft: "50px"}}>Add Music</h3>
               {message} 
               
               <form onSubmit={(e) => handleSubmit.mutate(e)}>
           <div className="row mx-4 mt-3" style={{paddingLeft: "11px", paddingRight: "11px"}}>
            
               <div className="col-8">
            <input  type="text" className="upTitle form-control " placeholder="Title"value={title} name='title' onChange={handleChange}/>
            </div>

            <div className="col">
            <div className="upFoto"> <input  class="form-file" id='thumbnail' type='file' onChange={handleChange} name="thumbnail" accept="image/*" hidden /> <label style={{padding: "10px"}} for='thumbnail'>Attach Thumbnail</label></div>
            </div>
          </div>

           <div className="row mx-5 mt-3">
            <input  type="text" className="form-control Addartis" placeholder="Year" value={year} name='year' onChange={handleChange}/>
          </div>

           <div className="row mx-5 mt-3">
           <select class="form-select text-white mb-3 Addartis" type='text' onChange={handleChange} value={idArtis} name="idArtis" as="select">
                            <option selected hidden value="">Singer</option>
                            {/* maping artis option */}
                            {artiss?.map((artis) => (
                                <option name="idArtis" value={artis.id}>{artis.name}</option>
                            ))}
                        </select>
          </div>
         
          <div className="row mx-5 mt-1">
          <div className="upLagu"> <input id='attache' type="file" class="form-ile" name='attache' onChange={handleChange} hidden /> <label style={{padding: "10px"}} for='attache'>Attach Music</label></div>

            </div>

          <div className="row mx-5 mt-3 mb-4">
            <button type="submit" className="btnAdd">Add Music</button>
          </div>
        </form>
           </div>

         
           </div>
  );
}

export default AddMusic;
    