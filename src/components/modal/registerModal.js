import React, {useState} from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function RegisterModal() {
  const navigate = useNavigate()
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        
        <button className="btnRegis"  onClick={handleShow}>Register</button>
  
        <Modal show={show} onHide={handleClose} >
            <div className="modalContainer">
       
            <h1 className='ms-3'>Register</h1>
         
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                className='inputText'
                  type="email"
                  name ="email"
                  placeholder="Email"
                  autoFocus
                /></Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1" >
              <Form.Control
              className='inputText'
              name= "password"
                  type="password"
                  placeholder="Password"
                  autoFocus />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1" >
              <Form.Control
              className='inputText'
              name= "Full Name"
                  type="text"
                  placeholder="Full Name"
                  autoFocus />
              </Form.Group>

              <Form.Group
                className="mb-3 "
                controlId="exampleForm.ControlTextarea1" >
            <select  style={{color:"white"}} name="singer" className="inputText">
              <option style={{color:"white"}} value="volvo">Laki-Laki</option>
              <option  style={{color:"white"}} value="saab">Perempuan</option>
              
            </select>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1" >
              <Form.Control
              className='inputText'
              name= "Phone"
                  type="text"
                  placeholder="Phone"
                  autoFocus />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1" >
              <Form.Control
              className='inputText'
              name= "Address"
                  type="text"
                  placeholder="Address"
                  autoFocus />
              </Form.Group>


              
            
              
            </Form>
          </Modal.Body>
        
       <center>  <Button variant="primary" onClick={() => navigate('list-transaction')} className="btnModal">
             Register
            </Button>
            
            <p className="mt-4">Already have an account? Klik <a href="#" style={{color:"white", fontWeight:'bold'}}>Here</a></p>
            </center>  
         </div>
         
        </Modal>
      </>
    );
  }
  
export default RegisterModal;