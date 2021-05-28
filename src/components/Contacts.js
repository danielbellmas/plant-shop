import React, { useRef, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import plant from "../images/plant.png";
import Swal from "sweetalert2";
import "../styles/Contacts.css";
const Contacts = () => {
  const inputRef = useRef({});
  useEffect(() => {
    inputRef.current["fullName"].value = "";
    inputRef.current["email"].value = "";
    inputRef.current["subject"].value = "";
    inputRef.current["message"].value = "";
  }, []);
  const handleSendForm = () => {
    if (
      inputRef.current["fullName"].value &&
      inputRef.current["email"].value &&
      inputRef.current["subject"].value &&
      inputRef.current["message"].value
    ) {
      Swal.fire({
        title: "Message Sent.",
        icon: "success",
        html: "We'll be in touch!",
        width: 600,
        padding: "3em",
        backdrop: `
    rgba(33, 107, 101, 0.3)
    url("${plant}")
    top center
    no-repeat
    `,
      });

      //Reset inputs
      inputRef.current["fullName"].value = "";
      inputRef.current["email"].value = "";
      inputRef.current["subject"].value = "";
      inputRef.current["message"].value = "";
    } else {
      Swal.fire({
        title: "Validation error.",
        icon: "error",
        html: "Please confirm the fields and submit it again.",
        width: 400,
        toast: true,
        position: "center",
      });
    }
  };

  const validateEmail = () => {
    let emailAddress = inputRef.current["email"].value;
    if (emailAddress)
      return emailAddress.match(
        "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
      );
    return false;
  };

  return (
    <div className="container">
      <h1 className="contacts-header">CONTACT</h1>

      <form className="contacts-form">
        <TextField
          className="text-field"
          required
          inputRef={(el) => (inputRef.current["fullName"] = el)}
          margin="normal"
          variant="outlined"
          id="name"
          label="Full Name"
          autoComplete="name"
        />
        <TextField
          id="email"
          className="text-field"
          required
          inputRef={(el) => (inputRef.current["email"] = el)}
          variant="outlined"
          label="Email"
          margin="normal"
          autoComplete="email"
        />
        <TextField
          className="text-field"
          required
          inputRef={(el) => (inputRef.current["subject"] = el)}
          variant="outlined"
          label="Subject"
        />
        <TextField
          className="text-field"
          required
          inputRef={(el) => (inputRef.current["message"] = el)}
          margin="normal"
          multiline
          variant="outlined"
          label="Your Message"
        />
        <Button
          style={{ background: "#216b65", color: "whitesmoke" }}
          variant="contained"
          type="button"
          size="large"
          onClick={handleSendForm}
        >
          Send
        </Button>
      </form>
      <img id="plant-icon" src={plant} alt="plant-icon" />
    </div>
  );
};

export default Contacts;
