import React, {useState, useContext} from "react";
import { Modal, Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import { Alert } from "react-bootstrap";
import { useMutation } from "react-query";
import { UserContext } from '../../context/userContext'



function RegisterModal() {

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const api = API()

  const navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext);

  // state
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
      email: "",
      password: "",
      fullName: "",
      phone: "",
      address: ""
  })

  const { fullName, email, password, phone, address } = form;

  const HandleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // when submit
  const HandleOnsubmit = useMutation(async (e) => {
      try {
  
        e.preventDefault();
  
        // Data body
        const body = JSON.stringify(form);
  
        // Configuration Content-type
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: body,
        };
  
        // Insert data user to database
        const response = await api.post("/register", config);
  
        console.log(response);
  
        // Notification
        if (response.status == 'success') {
          dispatch({
            type: "REGISTER_SUCCESS",
            payload: response.data
          });
  
          const alert = (
            <Alert variant="success" className="py-1">
              Success, <br/> Plesae wait..
            </Alert>
          );
          
          setForm({
              email: "",
              password: "",
              fullName: "",
              phone: "",
              address: ""
          });
          setMessage(alert);
          setTimeout(() => navigate("/home"), 2000)
          
        } else {
          const alert = (
            <Alert variant="danger" className="py-1">
              {response.message}
            </Alert>
          );
          setMessage(alert);
        }
      } catch (error) {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
        console.log(error);
      }
    });
    return (
      <>
        
        <button className="btnRegis"  onClick={handleShow}>Register</button>
  
        <Modal show={show} onHide={handleClose} >
            <div className="modalContainer">
       
            <h1 className='ms-3'>Register</h1>
          {message}
          <Modal.Body>
            <Form  onSubmit={(e)=> HandleOnsubmit.mutate(e)}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                className='inputText'
                  type="email"
                  name ="email"
                  placeholder="Email" value={email} onChange={HandleOnChange}
                  autoFocus
                /></Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1" >
              <Form.Control
              className='inputText'
              name= "password"
                  type="password"
                  placeholder="Password" value={password} onChange={HandleOnChange}
                  autoFocus />
              </Form.Group>

              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlTextarea1" >
              <Form.Control
              className='inputText' value={fullName} onChange={HandleOnChange}
              name= "fullName"
                  type="text"
                  placeholder="Full Name"
                  autoFocus />
              </Form.Group>

              <Form.Group
                className="mb-3 "
                controlId="exampleForm.ControlTextarea1" >
            <select   style={{color:"#c8c1c1" }} name="gender" className="inputGender">
                  <option style={{color:"#c8c1c1"}}  selected hidden>Gender</option>
              <option style={{color:"#c8c1c1"}} value="volvo">Laki-Laki</option>
              <option  style={{color:"#c8c1c1"}} value="saab">Perempuan</option>
              
            </select>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1" >
              <Form.Control
              className='inputText'
              name= "phone"
                  type="number"
                  placeholder="Phone" value={phone}
                  autoFocus onChange={HandleOnChange}/>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1" >
              <Form.Control
              className='inputText'
              name= "address"
                  type="text"
                  placeholder="Address"
                  autoFocus value={address} onChange={HandleOnChange}/>
              </Form.Group>
            <Button variant="primary" type="submit" className="btnModal">
             Register
            </Button>
              
            </Form>
          </Modal.Body>
        
       {/* <center>  
            
            <p className="mt-4">Already have an account? Klik <a style={{color:"white", fontWeight:'bold'}}>Here</a></p>
            </center>   */}
         </div>
         
        </Modal>
      </>
    );
  }
  
export default RegisterModal;