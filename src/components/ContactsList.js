import React from "react";
import { contactSelectors } from ".././redux/contactsSlice/contactsSlice";
import { useSelector } from "react-redux";
import Item from "./Item";

const ContactsList = () => {
  const contacts = useSelector(contactSelectors.selectAll);

  return (
    <div>
      {contacts.map((item) => (
        <Item key={item.id} item={item}/>
      ))}
    </div>
  );
};

export default ContactsList;
