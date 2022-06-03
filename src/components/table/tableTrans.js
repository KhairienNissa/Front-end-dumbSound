import React from "react";
import NavbarAdmin from '../../components/navbar/NavbarAdmin'


function TableTrans({user, index}) {
  return (
    // Code Here
    <tr>
    <th className="p-3" scope="row">{index+1}</th>
    <td  className="p-3">{user.fullName}</td>
    
    {user.transaction?.status === "success" ?
     <td className='p-3 text-green' >Active</td> : 
     <td className='p-3 text-red'>Inactive</td>
                                }
      {user.transaction?.status === "success" ?
      <td className='p-3 text-green'>{user.transaction.status}</td> : 
       user.transaction?.status === "pending" ?
       <td className='p-3 text-yellow'>{user.transaction.status}</td> :
       <td className='p-3 text-white'>-</td>
         }

    </tr>
  );
}

export default TableTrans;
    