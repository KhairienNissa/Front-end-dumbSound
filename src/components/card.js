import React from 'react';
// import { Card, ListGroup,ListGroupItem, } from 'react-bootstrap';
import Lagu1 from '../assets/lagu1.png'



// import { Table } from 'react-bootstrap';

const CardLagu = ({item}) => {

    return (
        <div className="col-md-2 justify-content-center" style={{marginRight:"5px"}}> 
        <div className="CardStyle">
            <img src={item.image} width='200px' height= '160px' />
            <div className="row pt-3 d-flex">
                <div className="col-7">
                    <p style={{fontSize: "15px", fontWeight : "bold"}}>{item.title}</p>
                </div>
                <div className="col" style={{marginLeft:"30px"}}>
                    <p style={{fontSize: "12px", fontWeight : "bold", paddingTop:"4px"}}>{item.year}</p>
                </div>
            </div>
            <div className="row" style={{marginTop: "-15px"}}>
                <p  style={{fontSize: "12px", fontWeight : "bold", paddingTop:"6px"}}>{item.singer}</p>
            </div>
        </div>
        {/* <NavLink className="nav-link text-black" to={`/detail-page/`+ item.id}
      exact >
        <Card style={{ width: '200px', boxShadow: '0 4px 4px 0 grey'}} className="bg-card-product">
    <Card.Img variant="top" src={item.image} style={{height: '150px' }}/>
    <Card.Body className='pb-0'>
    <Card.Title style={{fontSize:"20px", fontWeight:"bolder"}}>{item.name}</Card.Title>
    <Card.Text style={{fontSize:"15px"}}>
        {convertRupiah.convert(item.price)}
   <p style={{fontSize:"12px", marginTop:"10px", color:"white"}}>stok : {item.qty}</p> 
    </Card.Text>
    </Card.Body>
    </Card>
    </NavLink>   */}
        </div>
    )
}
export default CardLagu;
