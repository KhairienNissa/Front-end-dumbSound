import React, { useState, useEffect, useContext } from 'react';


import { UserContext } from '../../context/userContext';

import Contact from '../../components/complain/Contact';
import Chat from '../../components/complain/Chat';

import dataContact from '../../fakeData/dataContact';
import NavbarAdmin from '../../components/navbar/NavbarAdmin'
import {io} from 'socket.io-client'


let socket
export default function ComplainAdmin() {
  const [contact, setContact] = useState(null)
  const [contacts, setContacts] = useState([])
  // code here
  const [messages, setMessages] = useState([])


//   const title = 'Complain admin';
//   document.title = 'DumbMerch | ' + title;

const [state, dispatch] = useContext(UserContext)


useEffect(() =>{
    socket = io('http://localhost:5000', {
        auth: {
            token: localStorage.getItem('token')
        },
        // code here
        query: {
            id: state.user.id
        }
    })
 console.log(state.user.id)
    // code here
    socket.on("new message", () => {
      
        socket.emit("load messages", contact?.id)
    })

    
    // code here
    loadContacts()
    loadMessages()

    return () => {
        socket.disconnect()
    }
}, [messages]) // code here

const loadContacts = () => {
    socket.emit("load customer contacts")
    socket.on("customer contacts", (data) => {
        // filter just customers which have sent a message
        let dataContacts = data.filter((item)=>(item.status!=='admin') && (item.recipientMessage.length  >0||item.senderMessage.length>0))
        
        // manipulate customers to add message property with the newest message
        // code here
        dataContacts = dataContacts.map((item)=>({
            ...item,
            // message: item.senderMessage.length > 0 ? item.senderMessagge[item.senderMessage.length -1].message : "Click here to start message" 
        }))
        setContacts(dataContacts)
    })
}

// used for active style when click contact
const onClickContact = (data) => {
    setContact(data)
    // code here
    socket.emit("load messages",data.id)
}

// code here
const loadMessages = () => {
        
    socket.on("messages", (data)=>{
        if(data.length>0){
            const dataMessages = data.map((item)=>({
                idSender:  item.sender.id,
                message: item.message
            }))
          
            setMessages(dataMessages)
        }
        loadContacts()
        const chatMessages = document.getElementById("chat-messages")
        chatMessages.scrollTop = chatMessages?.scrollHeight
    })
}

const onSendMessage = (e)=>{
    if(e.key === 'Enter'){
        const data = {
            idRecipient: contact.id,
            message: e.target.value
        }

        socket.emit("send messages",data)
        e.target.value = ""
    }
}
  return (
    <>
      <NavbarAdmin/>

      <div className="container d-flex justify-content-center ComplainContainer">
                <div className="row d-flex justify-content-center align-item-center">
                    <div className="col-md-5 kolom-kiri">
                        <div className="row text-center py-3">
                            <h3 style={{color: "#EE4622"}}>Complain Center</h3>
                        </div>
                        <Contact dataContact={contacts} clickContact={onClickContact} contact={contact}/>
                    </div>
                
                {/* <div className="col-md-5 hidden kolom-kanan"> */}
                     <Chat contact={contact} messages={messages} user={state.user} sendMessage={onSendMessage}/>
                {/* </div> */}
                </div>

            </div>
  
    </>
  );
}
