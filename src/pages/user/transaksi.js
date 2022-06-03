import React, { useEffect, useContext, useState }  from "react";
// import ListTrans from "./pages/admin/ListTrans";
// import NavbarUser from "./components/navbar/NavbarUser";
// import NavbarAdmin from "./components/navbar/NavbarAdmin";
import { useNavigate } from 'react-router-dom'
import NavbarUser from "../../components/navbar/NavbarUser";
import Logo from  '../../assets/DUMBSOUND.png'
import { API } from '../../config/api'
import imgSuccess from '../../assets/successPayment.svg'
import imgPending from '../../assets/pending.svg'
import { UserContext } from "../../context/userContext";
// import NavbarAdmin from "../../components/navbar/NavbarAdmin";

function Transaksi() {
  
  let api = API()
  let navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext)
  const [userTrans, setUserTrans] = useState()

  // find user transaction
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
console.log(userTrans);
useEffect(() => {
    getTransaction()
}, [])


  // Create config Snap payment page with useEffect here ...
  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-5HdOeNDT3DpS0Wdo";
  
    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);
  
    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);
  
  const handleBuy = async () => {
    try {

      // Configuration
      const config = {
        method: "POST",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
      };

      // Insert transaction data
      const response = await api.post("/transaction", config);
      console.log(response);
      const token = response.payment.token;

      // SNAP MIDTRANS
      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/pay");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/pay");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });

      
    } catch (error) {
        console.log(error);
    }
  };
  return (
  

    <>
    {userTrans?.status === "success" ? 
        <div className="transaction-container d-flex flex-1 flex-column">
            <NavbarUser />
            <div className='d-flex flex-1 align-items-center text-center justify-content-center flex-column text-white mx-2' style={{marginTop: "100px"}}>
              <img src={imgSuccess} alt="" width={200} />
              <h1 className='my-5 fw-700 fs-1 text-orange'>You already premium</h1>
              <p className='lh-lg mb-4'>Sekarang kamu bisa memutar lagu sepuasmu! <br/><span className='text-orange fw-bold'>DUMB</span><b>SOUND: 098131222232</b></p>
              {/* <button type="submit" className="bg-orange px-5 py-3 text-white fw-500 py-2 borra-3" onClick={handleBuy}>Bayar Sekarang</button> */}
            </div>
        </div> :

        userTrans === null || userTrans?.status === "failure" || userTrans?.status === "failed" ?
        <div className="transaction-container d-flex flex-1 flex-column">
          <NavbarUser />
          <div className='d-flex flex-1 align-items-center text-center justify-content-center flex-column text-white mx-2' style={{marginTop: "100px"}}>
            <img src={Logo} alt="" width={200} />
            <h1 className='my-5 fw-700 fs-1'>Premium</h1>
            <p className='lh-lg mb-4'>Bayar sekarang dan nikmati streaming music yang kekinian dari <span className='text-orange fw-bold'>DUMB</span><b>SOUND</b><br/> <span className='text-orange fw-bold'>DUMB</span><b>SOUND: 098131222232</b></p>
            <p className="m-1">Hanya <b>Rp.30.000/Bulan</b></p>
            <button type="submit" className="bg-orange px-5 py-3 text-white btnStransaksi" onClick={handleBuy}>Bayar Sekarang</button>
          </div>
        </div> :

        userTrans?.status === "pending" &&
        <div className="transaction-container d-flex flex-1 flex-column">
            <NavbarUser />
            <div className='d-flex flex-1 align-items-center text-center justify-content-center flex-column text-white mx-2' style={{marginTop: "100px"}}>
              <img src={imgPending} alt="" width={200} />
              <h1 className='my-5 fw-700 fs-1 text-orange'>Pending</h1>
              <p className='lh-lg mb-4'>Pembayaran anda belum selesai <br/> <span className='fs-8'>selesaikan pembayaran secepatnya!</span> <br/><span className='text-orange fw-bold'>DUMB</span><b>SOUND: 098131222232</b></p>
              <button type="submit" className="btn btn-outline-light text-orange px-5 py-2 fw-500 py-2 borra-3" onClick={handleBuy}>Try payment</button>
              {/* <button type="submit" className="bg-orange px-5 py-3 text-white fw-500 py-2 borra-3" onClick={handleBuy}>Bayar Sekarang</button> */}
            </div>
        </div>
    }
    </>
  );
}

export default Transaksi;