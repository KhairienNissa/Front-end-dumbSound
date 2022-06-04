import React from 'react';
// import { Card, ListGroup,ListGroupItem, } from 'react-bootstrap';
import Lagu1 from '../assets/lagu1.png'

const path = "https://res.cloudinary.com/khairien/image/upload/v1654335135/" || "http://localhost:5000/uploads/"

// import { Table } from 'react-bootstrap';

const CardLagu = ({item}) => {

    return (
        <div className="col-md-2 justify-content-center" style={{marginRight:"10px"}}> 
        <div className="CardStyle">
            <img src={path + item.thumbnail} width='200px' height= '160px' />
            <div className="row pt-3 d-flex">
                <div className="col-7">
                    <p style={{fontSize: "15px", fontWeight : "bold"}}>{(item.title.length > 8) ? item.title.slice(0, 8) + '...' : item.title}</p>
                </div>
                <div className="col" style={{marginLeft:"30px"}}>
                    <p style={{fontSize: "12px", fontWeight : "bold", paddingTop:"4px"}}>{item.year}</p>
                </div>
            </div>
            <div className="row" style={{marginTop: "-15px"}}>
                <p  style={{fontSize: "12px", fontWeight : "bold", paddingTop:"6px"}}></p>
            </div>
        </div>

        </div>
    )
}
export default CardLagu;
