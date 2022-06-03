import React, { useEffect, useState, useContext }  from "react";
import ContainerImg from "../../components/containerImg";
import CardLagu from "../../components/card"
import NavbarUser from "../../components/navbar/NavbarUser";
import { dataLagu } from "../../fakeData/dataLagu";
import { useNavigate, NavLink } from "react-router-dom";
import Player from "../../components/Player"
import { API } from "../../config/api";
import { UserContext } from "../../context/userContext";
import { Navbar } from "react-bootstrap";

function HomeUser() {

  const api = API()
  const navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext)
  const [userTrans, setUserTrans] = useState()
  const [playMusic, setPlayMusic] = useState("")
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

  const getTransaction = async () => {
    try {
        const config = {
            method: "GET",
            headers: {
              Authorization: "Basic " + localStorage.token,
            },
          };
        const response = await api.get(`/user/${state.user.id}`, config)
        setUserTrans(response.dataUser?.transaction)
    } catch (error) {
        console.log(error);
    }
}
useEffect(() => {
    getTransaction()
}, [])

  return (
    // Code Here
    <div>
     <NavbarUser/>  
      <ContainerImg/>
      <h3 className="Rasakan">Dengarkan Dan Rasakan</h3>
      <div className="mx-sm-5 mx-3 borra-4 d-flex gap-3 justify-content-center flex-1 flex-wrap">
      {userTrans === null || userTrans?.status === "pending" ?
       <>
       {music? 
        music.map((item) => {
             return (
               
           <a onClick={()=> navigate('/transaksi-premium' )} className="col-md-2 mx-2 text-decoration-none text-white"> 
            <CardLagu item={item}/> </a> 
             )
                 })
               : 
               <h2 className='text-center text-white mx-auto mt-5'>Sorry.. <br/>No Music Found please contact Admin
               </h2>
               
               }
      
             </>
             :
             <>
              {userTrans?.status === "success" &&
               <>
                 <div className="mx-sm-5 mx-3 borra-4 d-flex gap-4 justify-content-center flex-1 flex-wrap">
               {music?
                music.map((item) => {
             return (

            <a  onClick={() => setPlayMusic(item)} className="col-md-2 text-decoration-none text-white"> <CardLagu item={item}/> </a> 
             )
                 })
               :
                <h2 className='text-center text-white mx-auto mt-5'>Sorry.. <br/>No Music Found please contact Admin
               </h2>
               }</div>
       
               </>
               }
             </>
           }
            
     </div> 
     {playMusic === "" ?
                <div /> :
                <Navbar className="fixed-bottom">
                    <Player playMusic={playMusic} />
                </Navbar>
            }

    </div>
  );
}

export default HomeUser ;
    