import React,{ useEffect, useState, useContext }  from "react";

import Navbar from "../components/navbar/Navbar";
import ContainerImg from "../components/containerImg";
import CardLagu from "../components/card";
import NavbarUser from "../components/navbar/NavbarUser";
import { dataLagu } from "../fakeData/dataLagu";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";
import { Alert, Button } from "react-bootstrap";
import LoginModal from "../components/modal/loginModal";
import RegisterModal from "../components/modal/registerModal";


function Home() {
  const api = API()

  const [state, dispatch] = useContext(UserContext)
  const [show, setShow] = useState(false);

  const [music, setMusic] = useState()
  // find music
  const getMusic = async () => {
      try {
          const response = await api.get('/musics')
          setMusic(response.data.musics);

      } catch (error) {
          console.log(error);
      }
  }
  useEffect(() => {
      getMusic()
  }, [])


  

  return (
    // Code Here
    <div>
        
       <Navbar/>
      <ContainerImg/>  
       <Alert show={show} variant="warning" style={{margin:'10px 350px'}}>
        <Alert.Heading>You can't play music!</Alert.Heading>
        <p>
        please login and or register first to be able to play the music you want!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} className="btnRegis">
            Okay
          </Button>
        </div>
      </Alert>
      <h3 className="Rasakan">Dengarkan Dan Rasakan</h3>
      <a onClick={() => setShow(true)}>
<div className="mx-sm-5 mx-3 borra-4 d-flex gap-3 justify-content-center flex-1 flex-wrap">
{music?.map((item) => {
             return <CardLagu item={item} />
                 })} 
      
     </div></a>
    </div>
  );
}

export default Home;