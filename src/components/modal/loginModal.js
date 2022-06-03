import React, {useState, useContext} from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import { Alert } from "react-bootstrap";
import { useMutation } from "react-query";
import { UserContext } from '../../context/userContext'


function LoginModal() {

  const navigate = useNavigate()
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let api = API()

    const [message, setMessage] = useState(null)
    const [state, dispatch] = useContext(UserContext)

    console.log(state);

    const [form, setForm] = useState ({
      email : '',
      password : ''
    })
  
    const {email, password} = form;

    const HandleOnChange = (event) =>{
      setForm({
        ...form,
        [event.target.name] : event.target.value
      })
  }

    const HandleOnsubmit = useMutation(async (event) => {
      try {
        event.preventDefault();
        
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
        const response = await api.post('/login', config);
  
        console.log(response);
        
        if (response.status === "success") {
          // Send data to useContext
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: response.data.user,
          });
  
          // Status check
          if (response.data.status === 'admin') {
            navigate("/list-transaction");
          } else {
            navigate("/home");
          }
  
          const alert = (
            <Alert variant="success" className="py-1">
              Login success
            </Alert>
          );
          setMessage(alert);
        } else if(response.state) {
        } else{
          const alert = (
            <Alert variant="danger" className="py-1">
              Login failed
            </Alert>
          );
          setMessage(alert);
        }
      } catch (error) {
        const alert = (
          <Alert variant="danger" className="py-1 alertfailed">
            Login failed!
          </Alert>
        );
        setMessage(alert);
        console.log(error);
      }
    });
    return (
      <>
        
        <button className="btnlogin"  onClick={handleShow}>Login</button>
  
        <Modal show={show} onHide={handleClose} >
            <div className="modalContainer">
       
            <h1 className='ms-3'>Login</h1>
         
          <Modal.Body>
            <Form onSubmit={(event)=> HandleOnsubmit.mutate(event)}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {message}
                <Form.Control
                className='inputText'
                  type="email"
                  placeholder="Email"
                  autoFocus name="email" value={email} onChange={HandleOnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
              
              <Form.Control
              className='inputText'
                  type="password"
                  placeholder="Password" name="password" value={password} onChange={HandleOnChange}
                  autoFocus
                />
              </Form.Group>
              
              <Button variant="primary" type="submit" className="btnModal">
             Login
            </Button>
            </Form>
          </Modal.Body>
         
         </div>
         
        </Modal>
      </>
    );
  }
  
export default LoginModal;