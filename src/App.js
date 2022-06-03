
import React, { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./pages/Home";
import Transaksi from "../src/pages/user/transaksi";
import ListTrans from "./pages/admin/ListTrans";
import AddMusic from "./pages/admin/AddMusic";
import AddArtis from "./pages/admin/AddArtis"
import HomeUser from "./pages/user/HomeUser";
import { API } from '../src/config/api';
import { UserContext } from '../src/context/userContext';
import ComplainAdmin from './pages/admin/complainAdmin';
import Complain from './pages/user/complainUser';
import NotFound from './components/404notfound';
import Payment from './pages/user/Payment';
// import PrivateRoute from './config/PrivateRoutes';



function App() {

 
  // base URL
  let api = API();
  // navigate
  const navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext)

  useEffect(() => {
    // Redirect Auth
    if (state.isLogin === false) {
      navigate("/");
    } else {
      if (state.user.status === "admin") {
        navigate("/list-transaction");
      } else if (state.user.status === "user") {
        navigate("/home");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
      };
      const response = await api.get("/check-auth", config);
      console.log(response);
      // If the token incorrect
      if (response.status === "failed") {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.user;
      // Get token from local storage
      payload.token = localStorage.token;
      
      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  
  
  return (
    // Code Here
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/*' element={<NotFound/>}/>
    {/* <Route  path='/'  element={<PrivateRoute/>}> */}
    <Route exact path='/home' element={<HomeUser/>} />
    <Route exact path='/payment' element={<Payment/>} />
    <Route exact path='/transaksi-premium' element={<Transaksi/>} />
    <Route exact path='/list-transaction' element={<ListTrans/>} />
    <Route exact path='/add-music' element={<AddMusic/>} />
    <Route path='/Add-artis'  element={<AddArtis/>}/>
    <Route exact path='/complain-admin' element={<ComplainAdmin/>} />
    <Route path='/complain-user'  element={<Complain/>}/>
    {/* </Route> */}
</Routes>
  );
}

export default App;

