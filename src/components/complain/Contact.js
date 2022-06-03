import React, { useState } from "react";
import default_profile from '../../assets/blank-profile.png'

export default function Contact({ dataContact, clickContact, contact }) {


  return (
    <>
     {dataContact.length > 0 && (
        <>
      {dataContact.map((item, index) => (
        <div
          key={item.id}
          className={`contact mt-3 px-2 ${contact?.id == item?.id && "contact-active"}`}
          onClick={() => {
            clickContact(item);
          }}
        >
          <img src={default_profile} className="rounded-circle me-2 img-contact" alt={item.fullName} />
          <div className="pt-2">
            <ul className="ps-0 text-contact">
              <li>{item.fullName}</li>
              <li className="text-contact-chat mt-1">{item.message}</li>
            </ul>
          </div>
        </div>
      ))}

        </>
      )}
    </>
  );
}
