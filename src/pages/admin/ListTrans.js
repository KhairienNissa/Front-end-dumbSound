import React, { useContext, useEffect, useState } from "react";
import NavbarAdmin from '../../components/navbar/NavbarAdmin';
import { Transaksi } from "../../fakeData/transaksi";
import TableTrans from "../../components/table/tableTrans";
import {API} from '../../config/api';
import { UserContext } from "../../context/userContext";


function ListTrans() {
    let api = API()
    
    const [state, dispatch] = useContext(UserContext)
    const [users, setUsers] = useState()

    const getUsers = async () => {
        const config = {
            method: 'GET',
            headers: {
                Authorization: "Basic " + localStorage.token,
            } 
        };
        const response = await api.get('/users', config)
        setUsers(response.getData)
    }
    console.log(users);
    useEffect(() => {
        getUsers()
    }, [])
    

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
                               
                                <th scope="col">Status User</th>
                                <th scope="col">Status Payment</th>
                                </tr>
                            </thead>
                            <tbody> 
                            {users?.map((user, index) => {
                                    return (
                                    <TableTrans user={user} index={index}/>
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
    