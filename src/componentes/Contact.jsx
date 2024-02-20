import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("message sent successfully...");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          alert("message not sent something happened!...");
        }
      );
  };

  return (
    <div className="Contact">
      <div className="end">
        <p className="end1">
          If you have any questions, suggestions or want to contact me, I would
          like to know your opinion, although I am at the beginning of my career
          as a programmer, I am looking for job opportunities where I can apply
          my skills and knowledge, this makes me very excited because it would
          help me develop in this profession.
        </p>
      </div>

      <div className="info-contact">
        <div className="card-form">
          <h1 className="title1">Contact Form</h1>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="firstname">
              <label htmlFor="first-name"> First Name: </label>
              <input
                type="text"
                name="firstName"
                id="first-name"
                placeholder="your name"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                required
                pattern="[a-zA-Z]+"
              />
            </div>

            <div className="lastname">
              <label htmlFor="last-name"> Last Name: </label>
              <input
                type="text"
                name="lastName"
                id="last-name"
                placeholder="your full name"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                required
                pattern="[a-zA-Z]+"
              />
            </div>

            <div className="useremail">
              <label htmlFor="user-email">Email:</label>
              <input
                type="email"
                name="userEmail"
                id="user-email"
                placeholder="your email"
                value={value3}
                onChange={(e) => setValue3(e.target.value)}
                required
              />
            </div>

            <div className="usermessage">
              <label htmlFor="user-age">Message:</label>
              <textarea
                name="message"
                type="text"
                placeholder="message to send"
                value={value4}
                onChange={(e) => setValue4(e.target.value)}
                required
              ></textarea>{" "}
            </div>

            <button type="submit" value="Submit" id="input-submit">
              Send
            </button>
          </form>
        </div>
        <div className="iconos-contact">
          <div className="linkedin">
            <a
              href="https://linkedin.com/in/nilo-jácome-riera"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="./icon/linkedin.png"
                alt="linkedin"
                className="linkedin"
              />
            </a>
          </div>
          <div className="whatsapp">
            <a
              href="https://api.whatsapp.com/send?phone=59397844272"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="./icon/whatsapp.png"
                alt="whatsapp"
                className="whatsapp"
              />
            </a>
          </div>
          <div className="github2">
            <a
              href="https://github.com/Nilito-Jacome"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="./icon/github2.png" alt="github" className="github2" />
            </a>
          </div>
          <div className="gmail">
            <a
              href="mailto:destinatario@hubspot.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="./icon/gmail.png" alt="gmail" className="gmail" />
            </a>
          </div>
          <div className="cv">
            <a href="/Nilo_cv.pdf" target="_blank" rel="noreferrer noopener">
              <img src="./icon/cv.png" alt="cv" className="cv" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
