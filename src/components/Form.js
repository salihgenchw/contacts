import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice/contactsSlice";
const Form = () => {
  const [name, setName] = useState("");
  const [number, setnumber] = useState(0);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return false;
    dispatch(addContact({ id: nanoid(), name }));
    setName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      Contacts:
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      Phone : 
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </form>
  );
};

export default Form;
