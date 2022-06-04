import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Contact from '../../components/complain/Contact'
import Chat from '../../components/complain/Chat'
import NavbarUser from '../../components/navbar/NavbarUser'
import {io} from 'socket.io-client'
import { UserContext } from '../../context/userContext'

let socket
export default function Complain() {
    const [contact, setContact] = useState(null)
    const [contacts, setContacts] = useState([])
    // code here
    const [messages, setMessages] = useState([])

    // const title = "Complain"
    // document.title = 'Dum | ' + title

    const [state, dispatch] = useContext(UserContext)
    useEffect(() =>{
        socket = io('https://caca-dumbsound.herokuapp.com', {
            auth: {
                token: localStorage.getItem("token")
            },
            // code here
            query: {
                id: state.user.id
            }
        })

        // code here
        // define corresponding socket listener 
        socket.on("new message", () => {
            console.log("contact", contact)
            console.log("triggered", contact?.id)
            socket.emit("load messages", contact?.id)
        })
                
        // listen error sent from server
        socket.on("connect_error", (err) => {
            console.error(err.message); // not authorized
        });
        // code here
        loadContact()
        loadMessages()

        return () => {
            socket.disconnect()
        }
    }, [messages]) // code here

    const loadContact = () => {
        // emit event load admin contact
        socket.emit("load admin contact")
        // listen event to get admin contact

        socket.on("admin contact",async(data)=>{
            const dataContact={
                ...data,
                message: messages.length > 0 ? messages[messages.length - 1].message : "Click here to start message"
            }
            setContacts([dataContact])
        })

    }

    // used for active style when click contact
    const onClickContact = (data) => {
        setContact(data)
        // code here
        socket.emit("load messages", data.id)
    }

    // code here
    const loadMessages = (value) => {
        socket.on("admin contact", (data) => {
            
            socket.on("messages",async(data)=>{
                if(data.length>0){
                    const dataMessages = data.map((item)=>({
                        idSender:  item.sender.id,
                        message: item.message
                    }))
                    console.log(dataMessages);
                    setMessages(dataMessages)
                }
                const chatMessages = document.getElementById("chat-messages")
                chatMessages.scrollTop = chatMessages?.scrollHeight
            })

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
            <NavbarUser />
            <div className="container d-flex justify-content-center ComplainContainer">
                <div className="row d-flex justify-content-center align-item-center">
                    <div className="col-md-5 kolom-kiri">
                        <div className="row text-center py-3">
                            <h3 style={{color: "#EE4622"}}>Complain Center</h3>
                        </div>
                        <Contact dataContact={contacts}  clickContact={onClickContact} contact={contact}/>
                    </div>
                
                {/* <div className="col-md-5 hidden kolom-kanan"> */}
                     <Chat contact={contact} messages={messages} user={state.user} sendMessage={onSendMessage} />
                {/* </div> */}
                </div>

            </div>


        </>
    )
}
