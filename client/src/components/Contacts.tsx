import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import Swal from "sweetalert2";
import "../styles/Contacts.css";
const Contacts = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  const watchAllFields = watch();

  const handleSendForm = (data) => {
    //The data that's needed to be stored
    //const { name, email, subject, message } = data;

    if (!validateEmail()) {
      //Maybe there is a way to check error with useForm
      // Swal.fire({
      //   title: "Message Sent.",
      //   icon: "success",
      //   html: "We'll be in touch!",
      //   width: 600,
      //   padding: "3em",
      //   backdrop: `
      // rgba(33, 107, 101, 0.3)
      // url("${plant}")
      // top center
      // no-repeat
      // `,
      // });

      //Reset Fields
      reset(data);
    } else {
      Swal.fire({
        title: "Validation error.",
        icon: "error",
        html: "Please confirm the fields and submit it again.",
        width: 300,
        toast: true,
        position: "center",
      });
    }
  };
  const validateEmail = () => {
    return !watchAllFields?.email?.match(
      "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" //Not a perfect email validator
    );
  };

  return (
    <div className="container">
      <h1 className="contacts-header">CONTACT</h1>

      <form className="contacts-form" onSubmit={handleSubmit(handleSendForm)}>
        <TextField
          {...register("name")}
          className="text-field"
          required
          margin="normal"
          variant="outlined"
          id="name"
          name="name"
          label="Full Name"
          autoComplete="name"
        />
        <TextField
          {...register("email")}
          id="email"
          name="email"
          className="text-field"
          required
          variant="outlined"
          label="Email"
          margin="normal"
          autoComplete="email"
          error={validateEmail()}
          helperText={validateEmail() ? "Incorrect Email." : ""}
        />
        <TextField
          {...register("subject")}
          id="subject"
          name="subject"
          className="text-field"
          required
          margin="normal"
          variant="outlined"
          label="Subject"
        />
        <TextField
          {...register("message")}
          id="message"
          name="message"
          className="text-field"
          required
          margin="normal"
          multiline
          variant="outlined"
          label="Your Message"
        />
        <Button
          style={{ background: "#216b65", color: "whitesmoke" }}
          variant="contained"
          type="submit"
          size="large"
        >
          Send
        </Button>
      </form>
      <img id="plant-icon" src="/images/plant.png" alt="plant-icon" />
    </div>
  );
};

export default Contacts;
