import React from "react";
import NavbarAdmin from '../../components/navbar/NavbarAdmin'


function TableTrans({item}) {
  return (
    // Code Here
    <tr>
    <th scope="row">{item.Id}</th>
    <td>{item.users}</td>
    <td>{item.remaining}</td>
    <td>{item.statusUser} </td>
    <td>{item.statusPay}</td>

    </tr>
  );
}

export default TableTrans;
    