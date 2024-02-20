import './Contact.css';
import { useState, useRef } from "react";
import emailjs from "emailjs-com";



const Contact = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          alert("¡Gracias, el mensaje se envió con éxito!");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          alert("¡Algo salió mal! No se pudo enviar el mensaje.");
        }
      );
  };
      

  return (
    <div className="Contact">
      <div className="card-form">
        <h1 className="title1">Formulario de contacto</h1>

        <form ref={form} onSubmit= {handleSubmit}>
          <div className="firstname">
            <label htmlFor="first_name"> Nombre: </label>
            <input
              type="text"
              name="firstName"
              id="first_name"
              placeholder="Ingrese su nombre"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              required
              pattern="[a-zA-Z]+"
            />
          </div>

          <div className="lastname">
            <label htmlFor="last_name"> Apellido: </label>
            <input
              type="text"
              name="lastName"
              id="last_name"
              placeholder="Ingrese su apellido"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              required
              pattern="[a-zA-Z]+"
            />
          </div>

          <div className="useremail">
            <label htmlFor="user_email">Email:</label>
            <input
              type="email"
              name="userEmail"
              id="user_email"
              placeholder="Ingrese su correo electrónico"
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
              required
            />
          </div>

          <div className="usermessage">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Escriba su mensaje"
              value={value4}
              onChange={(e) => setValue4(e.target.value)}
              required
            ></textarea>{" "}
          </div>

          <button type="submit">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;