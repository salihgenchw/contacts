import React from "react";
import { contactSelectors } from ".././redux/contactsSlice/contactsSlice";
import { useSelector } from "react-redux";
import Item from "./Item";

const ContactsList = () => {
  const contacts = useSelector(contactSelectors.selectAll);

  return (
    <ul className="list">
      {contacts.map((contact) => (
        <Item key={contact.id} item={contact} />
      ))}
    </ul>
  );
};

export default ContactsList;
