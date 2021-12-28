import React from "react";
import ContactsList from "./ContactsList";
import Form from "./Form";

const Contacts = () => {
  return (
    <div id="container">
      <h1>Contacts</h1>
      <ContactsList />
      <Form />
    </div>
  );
};

export default Contacts;
