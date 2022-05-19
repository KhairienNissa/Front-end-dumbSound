import React from "react";
// import ListTrans from "./pages/admin/ListTrans";
// import NavbarUser from "./components/navbar/NavbarUser";
// import NavbarAdmin from "./components/navbar/NavbarAdmin";
import NavbarUser from "../../components/navbar/NavbarUser";
import Logo from  '../../assets/DUMBSOUND.png'
// import NavbarAdmin from "../../components/navbar/NavbarAdmin";

function Transaksi() {
  return (
    // Code Here
    <div>
        <div> <NavbarUser/></div>
       
    <div style={{margin: "200px auto"}} >
        <center>
            <h2>Premium</h2>

            <p> Bayar sekarang dan nikmati streaming music yang kekinian dari <img src={Logo}/></p>


            <button className="btnStransaksi" onClick={() => alert("sukses")}>Lakukan Pembayaran</button>
        </center>
      </div>
    
    </div>
  );
}

export default Transaksi;