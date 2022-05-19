import React, {useState} from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function LoginModal() {

  const navigate = useNavigate()
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        
        <button className="btnlogin"  onClick={handleShow}>Login</button>
  
        <Modal show={show} onHide={handleClose} >
            <div className="modalContainer">
       
            <h1 className='ms-3'>Login</h1>
         
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
                <Form.Control
                className='inputText'
                  type="email"
                  placeholder="Email"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
              
              <Form.Control
              className='inputText'
                  type="password"
                  placeholder="Password"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
        
       <center>  <Button variant="primary" onClick={()=> navigate('/home')} className="btnModal">
             Login
            </Button>
            
            <p className="mt-4">Don't have an account? Klik <a href="#" style={{color:"white", fontWeight:'bold'}}>Here</a></p>
            </center>  
         </div>
         
        </Modal>
      </>
    );
  }
  
export default LoginModal;