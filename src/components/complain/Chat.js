import React from "react";
import default_profile from '../../assets/blank-profile.png'

export default function Chat({ user, messages, sendMessage, contact  }) {

  return (
    <>
      {contact ? (
        <>
           <div className="col-md-5 hidden kolom-kanan">
          <div style={{ height: "490px" }} className="overflow-auto px-3 py-5">
            {messages.map((item, index) => (
               <div key={index}>
                
                <div className={`d-flex py-1 ${item.idSender === user.id ? "justify-content-end" : "justify-content-start"} `}>

                {item.idSender !== user.id && (
               <img src={default_profile} className="rounded-circle me-2 img-chat" />
               )}

                <div className={ item.idSender === user.id ? "chat-me" : "chat-other"}>
                {item.message}
                </div>
              </div>
            </div>
            ))}
        
          </div>
          <div style={{ height: "10vh" }} className="px-3">
            <input placeholder="Send Message" className="input-message  px-2"  onKeyPress={sendMessage}/>
          </div>
          </div>
        </>
      ) : (
        <div>
       
        </div>
      )}
    </>
  );
}
