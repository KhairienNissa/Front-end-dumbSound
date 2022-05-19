import React from "react";
import NavbarAdmin from '../../components/navbar/NavbarAdmin';
import { Transaksi } from "../../fakeData/transaksi";
import TableTrans from "../../components/table/tableTrans";


function ListTrans() {
  return (
    // Code Here
    <div>
           <div>
           <NavbarAdmin/>
           </div>

           <div>
               <div className="container" style={{marginTop : "150px"}}>
                   <div className="row text-white mt-5 mb-2">
                       <div className="col-10 mb-3">
                        <h4>Incoming Transaction</h4>
                        </div>
                    
                    </div>
                    
                    <table className="table table-striped table-dark ">
                            <thead className="textHead">
                                <tr>
                                <th  scope="col">No</th>
                                <th scope="col">Users</th>
                                <th scope="col">Remaining Active</th>
                                <th scope="col">Status User</th>
                                <th scope="col">Status Payment</th>
                                </tr>
                            </thead>
                            <tbody> 
                            {Transaksi?.map((item, index) => {
                                    return (
                                    <TableTrans item={item} key={index}/>
                                    )
                                })}
                                
                                
                                
                            </tbody>
                            </table>
               </div>
           </div>
           </div>
  );
}

export default ListTrans;
    