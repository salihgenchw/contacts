import React from "react";
import { useSelector } from "react-redux";
import { contactSelectors } from "../redux/contactSlice";
// import Items from "./Items";

const List = () => {
  const contacts = useSelector(contactSelectors.selectAll());

  console.log(contacts);

  return <div>Merhaba</div>;
};

export default List;
/* {contacts.map((contact) => (
        <Items key={contact.id} item={contacts} />
      ))} */
